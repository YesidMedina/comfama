import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import useContinent from "../hooks/useContinent";
import { Information } from "./Information";

export const ListCountry = () => {
  const { info } = useContinent();

  return (
    <>
      <Typography marginY={6}></Typography>
      <Grid container spacing={6}>
        {info.map((information) => (
          <Information information={information} />
        ))}
      </Grid>
    </>
  );
};

export default ListCountry;
