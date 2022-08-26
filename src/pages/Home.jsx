import { Container, Grid } from "@mui/material";
import { AnimeProvider } from "../context/AnimeProvider";
import { ListChapter } from "../components/ListChapter";
import Searchbq from "../components/Searchbq";

const Home = () => {
  return (
    <Container >
      <AnimeProvider >
          <Grid >
            <Searchbq />
          </Grid>
        <Grid item mt={2} >
          <ListChapter />
        </Grid>
      </AnimeProvider>
    </Container>
  );
};

export default Home;
