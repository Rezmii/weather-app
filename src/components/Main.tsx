import { Box, Text } from "@chakra-ui/react";
import fetchWeather from "../services/fetchWeather";
import { useEffect, useState } from "react";

interface WeatherData {
  location: WeatherLocation;
  current: WeatherCurrent;
}

interface WeatherLocation {
  name: string;
  country: string;
}

interface WeatherCurrent {
  last_updated: string;
  temp_c: number;
  temp_f: number;
}

interface Props {
  cityName: string;
}

const Main = ({ cityName }: Props) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const handleFetchWeather = async () => {
      if (cityName) {
        try {
          const data = await fetchWeather(cityName);
          console.log("Weather Data:", data);
          setWeatherData(data);
        } catch (error) {
          console.error("Error fetching weather:", error);
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError("An unknown error occurred.");
          }
        }
      }
    };
    handleFetchWeather();
  }, [cityName]);

  if (error) {
    return <Text>Error fetching weather data: {error}</Text>;
  }

  return <Box>{weatherData && <Text>{weatherData.location.name}</Text>}</Box>;
};

export default Main;
