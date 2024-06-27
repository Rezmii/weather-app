import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import HourWeatherSection from "./HourWeatherSection";
import { WeatherData } from "../App";

interface Props {
  weatherData: WeatherData | null;
  americanUnits: boolean;
}

const HourlyForecast = ({ weatherData, americanUnits }: Props) => {
  const marginHeading = useBreakpointValue({ xl: "4em", "2xl": "" });

  return (
    <Flex alignItems="center" flexDirection="column" gap="2em">
      <Heading
        as="h2"
        size="2xl"
        color="white"
        fontWeight="normal"
        marginTop={marginHeading}
      >
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
