import { VStack, Text } from "@chakra-ui/react";
import { WeatherData } from "./Main";

export interface Props {
  weatherData: WeatherData | null;
}

const MainHeader = ({ weatherData }: Props) => {
  const splitLocalDate = (localTime: string) => {
    const [date, time] = localTime.split(" ");
    return { date, time };
  };

  return (
    <>
      <VStack alignItems="center">
        <Text color="white" fontSize="5xl">
          {weatherData.location.name}, {weatherData.location.country}
        </Text>
        <Text color="gray.500" fontSize="3xl">
          {splitLocalDate(weatherData.location.localtime).date} |
          {splitLocalDate(weatherData.location.localtime).time}
        </Text>
      </VStack>
    </>
  );
};

export default MainHeader;
