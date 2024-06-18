import { HStack, Text } from "@chakra-ui/react";

const HourWeatherSection = () => {
  return (
    <HStack justifyContent="space-between" gap="5em">
      <Text>Date</Text>
      <Text>Temp</Text>
      <Text>Raining chance</Text>
    </HStack>
  );
};

export default HourWeatherSection;
