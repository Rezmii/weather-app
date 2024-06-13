import { SimpleGrid } from "@chakra-ui/react";
import { WeatherData } from "./Main";
import MainSecondaryInfo from "./MainSecondaryInfo";

interface Props {
  weatherData: WeatherData | null;
}

const GridInfo = ({ weatherData }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <MainSecondaryInfo weatherData={weatherData} />
      <MainSecondaryInfo weatherData={weatherData} />
      <MainSecondaryInfo weatherData={weatherData} />
      <MainSecondaryInfo weatherData={weatherData} />
      <MainSecondaryInfo weatherData={weatherData} />
      <MainSecondaryInfo weatherData={weatherData} />
    </SimpleGrid>
  );
};

export default GridInfo;
