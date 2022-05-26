import { Container, Grid } from "@mui/material";
import { ContinentProvider } from "../context/ContinentProvider";
import ListNext from "../components/ListNext";
import Header from "../components/Header";

function Next() {
  return (
    <Grid>
      <Header />
      <Container>
        <ContinentProvider>
          <ListNext />
        </ContinentProvider>
      </Container>
    </Grid>
  );
}

export default Next;
