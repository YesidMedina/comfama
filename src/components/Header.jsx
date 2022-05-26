import { AppBar, Toolbar } from "@mui/material";
import { Typography, Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid marginY={8}>
      <AppBar position="absolute" color="">
        <Toolbar>
          <Typography variant="h5">Where in the world?</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
