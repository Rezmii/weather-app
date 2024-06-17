import { SimpleGrid } from "@chakra-ui/react";
import { WeatherData } from "./Main";
import MainSecondaryInfo from "./MainSecondaryInfo";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { PiCompassRoseLight } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { IoRainyOutline } from "react-icons/io5";
import { PiSunLight } from "react-icons/pi";

interface Props {
  weatherData: WeatherData | null;
}

const GridInfo = ({ weatherData }: Props) => {
  const spreadWeatherData = { ...weatherData?.current };
  return (
    <SimpleGrid columns={2} spacing={10}>
      <MainSecondaryInfo
        textInfo="Feels like"
        info={spreadWeatherData.feelslike_c}
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
        info={spreadWeatherData.humidity}
        IconComponent={WiHumidity}
        iconSize={68}
      />
      <MainSecondaryInfo
        textInfo="Wind speed"
        info={spreadWeatherData.wind_kph}
        IconComponent={FiWind}
      />
      <MainSecondaryInfo
        textInfo="Chance of rain"
        info="empty"
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
