import { Switch } from "@material-ui/core";
import { AppBar, Toolbar } from "@mui/material";
import { Typography, Grid } from "@mui/material";


const Header = () => {
  return (
    <Grid marginY={8} sx={{ mr: 100}}>
      <AppBar position="absolute">
        <Toolbar sx={{ mt: 2}}>
        <img src="natuto.webp" width={80} height={80} sx={{ mt: -12 }} />  
          <Typography sx={{ ml: 4 }} variant="h4">Mas de 25 mil Animes!!</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
