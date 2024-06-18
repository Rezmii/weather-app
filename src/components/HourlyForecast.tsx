import { Flex, Heading } from "@chakra-ui/react";
import HourWeatherSection from "./HourWeatherSection";

const HourlyForecast = () => {
  return (
    <Flex alignItems="center" flexDirection="column" gap="2em">
      <Heading as="h2" size="2xl" color="white" fontWeight="normal">
        Hourly Forecast
      </Heading>
      <HourWeatherSection />
    </Flex>
  );
};

export default HourlyForecast;
