import { Container, Grid } from "@mui/material";
import { ContinentProvider } from "../context/ContinentProvider";
import Grouped from "../components/Grouped";
import { ListCountry } from "../components/ListCountry";
import Searchbq from "../components/Searchbq";

const Home = () => {
  return (
    <Container>
      <ContinentProvider>
        <Grid container direction="row-reverse">
          <Grid item md={3} lg={3}>
            <Grouped />
          </Grid>
          <Grid container direction="row" marginY={-6}>
            <Grid item lg={6}>
              <Searchbq />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ListCountry />
        </Grid>
      </ContinentProvider>
    </Container>
  );
};

export default Home;
