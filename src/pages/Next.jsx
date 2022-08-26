import { Container, Grid } from "@mui/material";
import { AnimeProvider } from "../context/AnimeProvider";
import ListNext from "../components/ListNext";
import Header from "../components/Header";

function Next() {
  return (
    <Grid>
      <Header />
      <Container>
        <AnimeProvider>
          <ListNext />
        </AnimeProvider>
      </Container>
    </Grid>
  );
}

export default Next;
