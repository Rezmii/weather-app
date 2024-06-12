import { Text } from "@chakra-ui/react";
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

const Main = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const handleFetchWeather = async () => {
      try {
        const data = await fetchWeather();
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
    };

    handleFetchWeather();
  }, []);

  if (error) {
    return <Text>Error fetching weather data: {error}</Text>;
  }

  return <div>{weatherData && <Text>{weatherData.location.name}</Text>}</div>;
};

export default Main;
