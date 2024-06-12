import { VStack, Text } from "@chakra-ui/react";
import { WeatherData } from "./Main";

interface Props {
  weatherData: WeatherData | null;
}

const MainHeader = ({ weatherData }: Props) => {
  return (
    <>
      {weatherData && (
        <VStack alignItems="center">
          <Text color="white" fontSize="5xl">
            {weatherData.location.name}, {weatherData.location.country}
          </Text>
          <Text color="gray.500" fontSize="3xl">
            {weatherData.location.localtime} | {weatherData.current.temp_c} °C
          </Text>
        </VStack>
      )}
    </>
  );
};

export default MainHeader;
