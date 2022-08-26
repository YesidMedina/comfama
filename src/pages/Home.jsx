import { Container, Grid } from "@mui/material";
import { AnimeProvider } from "../context/AnimeProvider";
import { ListChapter } from "../components/ListChapter";
import Search from "../components/Search";

const Home = () => {
  return (
    <Container>
      <AnimeProvider>
        <Grid item lg={6}>
          <Search />
        </Grid>
        <Grid item>
          <ListChapter />
        </Grid>
      </AnimeProvider>
    </Container>
  );
};

export default Home;
