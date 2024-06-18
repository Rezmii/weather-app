import { SimpleGrid } from "@chakra-ui/react";
import MainSecondaryInfo from "./MainSecondaryInfo";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { PiCompassRoseLight } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { IoRainyOutline } from "react-icons/io5";
import { PiSunLight } from "react-icons/pi";
import { WeatherData } from "../App";

interface Props {
  weatherData: WeatherData | null;
  americanUnits: boolean;
}

const GridInfo = ({ weatherData, americanUnits }: Props) => {
  const spreadWeatherData = { ...weatherData?.current };
  return (
    <SimpleGrid columns={2} spacing={10}>
      <MainSecondaryInfo
        textInfo="Feels like"
        info={
          americanUnits
            ? `${spreadWeatherData?.feelslike_f}°F`
            : `${spreadWeatherData?.feelslike_c}°C`
        }
        IconComponent={LiaTemperatureHighSolid}
        iconSize={65}
      />
      <MainSecondaryInfo
        textInfo="Wind direction"
        info={spreadWeatherData.wind_dir}
        IconComponent={PiCompassRoseLight}
      />
      <MainSecondaryInfo
        textInfo="Humidity"
        info={`${spreadWeatherData.humidity}%`}
        IconComponent={WiHumidity}
        iconSize={68}
      />
      <MainSecondaryInfo
        textInfo="Wind speed"
        info={
          americanUnits
            ? `${spreadWeatherData?.wind_mph}mph`
            : `${spreadWeatherData?.wind_kph}km/h`
        }
        IconComponent={FiWind}
      />
      <MainSecondaryInfo
        textInfo="Chance of rain"
        info={`${weatherData?.forecast.forecastday[0].day.daily_chance_of_rain}%`}
        IconComponent={IoRainyOutline}
      />
      <MainSecondaryInfo
        textInfo="UV index"
        info={spreadWeatherData.uv}
        IconComponent={PiSunLight}
        iconSize={62}
      />
    </SimpleGrid>
  );
};

export default GridInfo;
