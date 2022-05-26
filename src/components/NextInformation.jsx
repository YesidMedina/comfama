import { useState } from "react";
import { Button, CardMedia, Container, Typography, Grid } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const NextInformation = () => {
  const [informationCountry] = useState(
    JSON.parse(window.localStorage.getItem("country"))
  );

  const {
    flags,
    name,
    population,
    region,
    capital,
    subregion,
    languages,
    currencies,
    tld,
  } = informationCountry;
  return (
    <Container>
      <Button
        href="/"
        variant="outlined"
        color="inherit"
        style={{ marginBottom: 80 }}
      >
        <KeyboardArrowLeftIcon />
        Back
      </Button>

      <Grid container>
        <Grid item width={400} height={400}>
          <CardMedia component="img" image={flags?.png} />
        </Grid>

        <Grid item marginLeft={15}>
          <Typography variant="h4">{name?.common}</Typography>
          <Typography variant="body1">Population: {population}</Typography>
          <Typography variant="body1">Region: {region}</Typography>
          <Typography variant="body1">Capital: {capital}</Typography>
          <Typography variant="body1">Sub region: {subregion}</Typography>
          <Typography variant="body1">
            Lenguages: {Object.values(languages).join(" ")}
          </Typography>
          <Typography variant="body1">
            Currences:
            {Object.values(currencies)
              .map((cur) => cur.name)
              .join(" ")}
          </Typography>
          <Typography variant="body1">Top level Domain: {tld[0]}</Typography>
          <Grid item>
            <Typography variant="body2">
              Border Actions:
              <Button
                variant="outlined"
                color="inherit"
                disabled
                style={{ marginBottom: 20 }}
              >
                France
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                disabled
                style={{ marginBottom: 20 }}
              >
                Germany
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                disabled
                style={{ marginBottom: 20 }}
              >
                Spain
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
