import { Box, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import HourlyForecast from "./components/HourlyForecast";
import fetchWeather from "./services/fetchWeather";

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
  hour: Array<ForecastHour>;
}

interface DailyForecast {
  daily_chance_of_rain: string;
}

interface ForecastHour {
  time: string;
  temp_c: number;
  temp_f: number;
  chance_of_rain: number;
}

function App() {
  const [cityName, setCityName] = useState<string>("");
  const [americanUnits, setAmericanUnits] = useState(false);

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

  return (
    <>
      <Box bg="blue.200" minHeight="100vh">
        <Grid
          templateAreas={`"header" "main"`}
          gridTemplateRows={"auto 1fr"}
          height="100vh"
          bg={"blue.200"}
        >
          <GridItem area="header">
            <Header
              onHandleClick={(name) => setCityName(name)}
              onClickCel={() => setAmericanUnits(false)}
              onClickFar={() => setAmericanUnits(true)}
            />
          </GridItem>
          <GridItem area="main" display="flex" justifyContent="center">
            <Main
              weatherData={weatherData}
              cityName={cityName}
              americanUnits={americanUnits}
              error={error}
            />
          </GridItem>
        </Grid>
        {cityName && (
          <HourlyForecast
            weatherData={weatherData}
            americanUnits={americanUnits}
          />
        )}
      </Box>
    </>
  );
}

export default App;
