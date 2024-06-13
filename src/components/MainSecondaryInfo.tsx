import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { WeatherData } from "./Main";

interface Props {
  weatherData: WeatherData | null;
}

const MainSecondaryInfo = ({ weatherData }: Props) => {
  return (
    <HStack gap="-5">
      <Image
        boxSize="6em"
        src={weatherData?.current.condition.icon}
        paddingTop="3"
      />
      <VStack>
        <Text color="white" fontSize="4xl">
          {weatherData?.current.temp_c}°C
        </Text>
        <Text color="white" fontSize="3xl">
          {weatherData?.current.condition.text}
        </Text>
      </VStack>
    </HStack>
  );
};

export default MainSecondaryInfo;
