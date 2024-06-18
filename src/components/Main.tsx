import { HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import MainPrimaryInfo from "./MainPrimaryInfo";
import GridInfo from "./GridInfo";
import fetchWeather from "../services/fetchWeather";

export interface WeatherData {
  location: WeatherLocation;
  current: WeatherCurrent;
  forecast: WeatcherForecast;
}

interface WeatherLocation {
  name: string;
  country: string;
  localtime: string;
}

interface WeatherCurrent {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: Condition;
  wind_dir: string;
  humidity: number;
  wind_kph: number;
  wind_mph: number;
  uv: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface WeatcherForecast {
  forecastday: Array<ForecastDay>;
}

interface ForecastDay {
  day: DailyForecast;
}

interface DailyForecast {
  daily_chance_of_rain: string;
}

interface Props {
  cityName: string;
  americanUnits: boolean;
}

const Main = ({ cityName, americanUnits }: Props) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const handleFetchWeather = async () => {
      if (cityName) {
        try {
          const data = await fetchWeather(cityName);
          console.log("Data:", data);
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
    return (
      <Text size="2xl" color="white">
        Error fetching weather data: {error}
      </Text>
    );
  }

  return (
    <>
      {weatherData && (
        <VStack spacing="3em">
          <MainHeader weatherData={weatherData} />
          <HStack
            justifyContent="space-between"
            width="70vw"
            alignItems="flex-start"
          >
            <MainPrimaryInfo
              weatherData={weatherData}
              americanUnits={americanUnits}
            />
            <GridInfo weatherData={weatherData} americanUnits={americanUnits} />
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default Main;
