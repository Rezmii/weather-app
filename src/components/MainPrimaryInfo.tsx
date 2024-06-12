import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Props } from "./MainHeader";

const MainPrimaryInfo = ({ weatherData }: Props) => {
  return (
    <HStack>
      <Image boxSize="12em" src={weatherData?.current.condition.icon} />
      <VStack>
        <Text color="white" fontSize="7xl">
          {weatherData?.current.temp_c} °C
        </Text>
        <Text color="white" fontSize="4xl">
          {weatherData?.current.condition.text}
        </Text>
      </VStack>
    </HStack>
  );
};

export default MainPrimaryInfo;
