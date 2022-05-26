import { Grid, Typography } from "@mui/material";
import useContinent from "../hooks/useContinent";
import { NextInformation } from "./NextInformation";

export const ListNext = () => {
  const { informationCountry } = useContinent();

  return (
    <>
      <Typography marginY={6}></Typography>

      <Grid container spacing={3}>
        <NextInformation informationCountry={informationCountry} />
      </Grid>
    </>
  );
};

export default ListNext;
