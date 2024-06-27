import { VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { WeatherData } from "../App";

export interface Props {
  weatherData: WeatherData | null;
}

const MainHeader = ({ weatherData }: Props) => {
  const splitLocalDate = (localTime: string) => {
    const [date, time] = localTime.split(" ");
    return { date, time };
  };

  const mainFontSize = useBreakpointValue({ xl: "4xl", "2xl": "5xl" });
  const secondFontSize = useBreakpointValue({ xl: "2xl", "2xl": "3xl" });

  return (
    <>
      {weatherData && (
        <VStack alignItems="center">
          <Text color="white" fontSize={mainFontSize}>
            {weatherData.location.name}, {weatherData.location.country}
          </Text>
          <Text color="white" fontSize={secondFontSize}>
            {splitLocalDate(weatherData.location.localtime).date} |
            {splitLocalDate(weatherData.location.localtime).time}
          </Text>
        </VStack>
      )}
    </>
  );
};

export default MainHeader;
