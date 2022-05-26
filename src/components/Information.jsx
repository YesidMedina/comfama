import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Link, Typography, Grid } from "@mui/material";
import useContinent from "../hooks/useContinent";

export const Information = ({ information }) => {
  const { getInformationCountry } = useContinent();
  const { flags, name, population, region, capital } = information;
  
  return (
    <Grid item md={3} lg={3}>
      <Card>
        <Link
          href="/Next"
          onClick={() => {
            getInformationCountry(information);
          }}
          key={information.name.common}
        >
          <CardMedia component="img" image={flags.png} height={"120"} />
        </Link>
        <CardContent>
          <Typography variant="h6">{name.common}</Typography>
          <Typography variant="body2">Population: {population}</Typography>
          <Typography variant="body2">Region: {region}</Typography>
          <Typography variant="body2">Capital: {capital}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};
