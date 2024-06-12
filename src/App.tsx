import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={`"header" "main"`}
      gridTemplateRows={"auto 1fr"}
      height="100vh"
    >
      <GridItem area="header"></GridItem>
      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
