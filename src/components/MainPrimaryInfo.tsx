import { HStack, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import iconMap from "../services/weatherIconMaps";
import React from "react";
import { IconType } from "react-icons";
import { WeatherData } from "../App";

interface Props {
  weatherData: WeatherData | null;
  americanUnits: boolean;
}

const MainPrimaryInfo = ({ weatherData, americanUnits }: Props) => {
  const weatherIcon =
    weatherData?.current.condition.code !== undefined
      ? iconMap[weatherData?.current.condition.code]
      : "Unknown";

  const iconColor = "white";
  const iconSize = useBreakpointValue({ xl: "5em", "2xl": "8em" });
  const mainFontSize = useBreakpointValue({ xl: "5xl", "2xl": "7xl" });
  const secondFontSize = useBreakpointValue({ xl: "3xl", "2xl": "5xl" });

  return (
    <HStack gap="-5">
      {React.createElement(weatherIcon as IconType, {
        size: iconSize,
        color: iconColor,
      })}
      <VStack marginLeft={10}>
        <Text color="white" fontSize={mainFontSize}>
          {americanUnits
            ? `${weatherData?.current.temp_f}°F`
            : `${weatherData?.current.temp_c}°C`}
        </Text>
        <Text color="white" fontSize={secondFontSize}>
          {weatherData?.current.condition.text}
        </Text>
      </VStack>
    </HStack>
  );
};

export default MainPrimaryInfo;
