import { HStack, Text, VStack } from "@chakra-ui/react";
import MainHeader from "./MainHeader";
import MainPrimaryInfo from "./MainPrimaryInfo";
import GridInfo from "./GridInfo";
import { WeatherData } from "../App";

interface Props {
  weatherData: WeatherData | null;
  cityName: string;
  americanUnits: boolean;
  error: string;
}

const Main = ({ weatherData, americanUnits, error }: Props) => {
  if (error) {
    return (
      <Text size="2xl" color="white">
        Error fetching weather data: {error}
      </Text>
    );
  }

  return (
    <>
      {weatherData && (
        <VStack spacing="3em">
          <MainHeader weatherData={weatherData} />
          <HStack
            justifyContent="space-between"
            width="70vw"
            alignItems="flex-start"
          >
            <MainPrimaryInfo
              weatherData={weatherData}
              americanUnits={americanUnits}
            />
            <GridInfo weatherData={weatherData} americanUnits={americanUnits} />
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default Main;
