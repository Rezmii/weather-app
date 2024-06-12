import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      templateAreas={`"header" "main"`}
      gridTemplateRows={"auto 1fr"}
      height="100vh"
      bg={"blue.200"}
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
