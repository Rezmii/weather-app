import { Flex, Heading } from "@chakra-ui/react";
import HourWeatherSection from "./HourWeatherSection";
import { WeatherData } from "../App";

interface Props {
  weatherData: WeatherData | null;
  americanUnits: boolean;
}

const HourlyForecast = ({ weatherData, americanUnits }: Props) => {
  return (
    <Flex alignItems="center" flexDirection="column" gap="2em">
      <Heading as="h2" size="2xl" color="white" fontWeight="normal">
        Hourly Forecast
      </Heading>
      <HourWeatherSection
        weatherData={weatherData}
        americanUnits={americanUnits}
      />
    </Flex>
  );
};

export default HourlyForecast;
