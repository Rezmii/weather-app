import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState<string>("");
  return (
    <Grid
      templateAreas={`"header" "main"`}
      gridTemplateRows={"auto 1fr"}
      height="100vh"
      bg={"blue.200"}
    >
      <GridItem area="header">
        <Header onHandleClick={(name) => setCityName(name)} />
      </GridItem>
      <GridItem area="main" display="flex" justifyContent="center">
        <Main cityName={cityName} />
      </GridItem>
    </Grid>
  );
}

export default App;
