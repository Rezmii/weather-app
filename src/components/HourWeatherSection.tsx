import { HStack, VStack, Text, Divider } from "@chakra-ui/react";
import { IoRainy } from "react-icons/io5";
import { WeatherData } from "../App";

interface Props {
  weatherData: WeatherData | null;
  americanUnits: boolean;
}

const HourWeatherSection = ({ weatherData, americanUnits }: Props) => {
  const spreadWeatherData = weatherData?.forecast.forecastday[0].hour;

  const getHour = (time: string) => {
    const hour = time.split(" ");
    return hour[1];
  };

  const getCurrentHour = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0].slice(0, 5);
  };

  const currentHour = getCurrentHour();

  const startIndex =
    spreadWeatherData?.findIndex((hour) => getHour(hour.time) >= currentHour) ??
    0;

  return (
    <VStack justifyContent="space-between" gap="5em" marginTop="5em">
      {spreadWeatherData &&
        spreadWeatherData.slice(startIndex - 1).map((hour, index) => (
          <>
            <HStack key={index} gap="4em" marginBottom="-5">
              <Text color="white" fontSize="3xl">
                {getHour(hour.time)}
              </Text>
              <Text color="white" fontSize="3xl">
                {americanUnits ? `${hour.temp_f}°F` : `${hour.temp_c}°C`}
              </Text>
              <HStack>
                <IoRainy size="3em" color="white" />
                <Text color="white" fontSize="3xl">
                  {hour.chance_of_rain}%
                </Text>
              </HStack>
            </HStack>
            <Divider border="2px solid white" />
          </>
        ))}
    </VStack>
  );
};

export default HourWeatherSection;
