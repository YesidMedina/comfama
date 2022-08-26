import { Container, Grid } from "@mui/material";
import { AnimeProvider } from "../context/AnimeProvider";
import { ListChapter } from "../components/ListChapter";
import Search from "../components/Search";

const Home = () => {
  return (
    <Container >
      <AnimeProvider >
          <Grid >
            <Search />
          </Grid>
        <Grid item mt={2} >
          <ListChapter />
        </Grid>
      </AnimeProvider>
    </Container>
  );
};

export default Home;
