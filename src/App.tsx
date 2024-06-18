import { Box, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  const [cityName, setCityName] = useState<string>("");
  const [americanUnits, setAmericanUnits] = useState(false);
  return (
    <>
      <Box bg="blue.200" minHeight="100vh">
        <Grid
          templateAreas={`"header" "main"`}
          gridTemplateRows={"auto 1fr"}
          height="100vh"
          bg={"blue.200"}
        >
          <GridItem area="header">
            <Header
              onHandleClick={(name) => setCityName(name)}
              onClickCel={() => setAmericanUnits(false)}
              onClickFar={() => setAmericanUnits(true)}
            />
          </GridItem>
          <GridItem area="main" display="flex" justifyContent="center">
            <Main cityName={cityName} americanUnits={americanUnits} />
          </GridItem>
        </Grid>
        {cityName && <HourlyForecast />}
      </Box>
    </>
  );
}

export default App;
