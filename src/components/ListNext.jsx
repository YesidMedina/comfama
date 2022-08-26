import { Grid, Typography } from "@mui/material";
import useAnime from "../hooks/useAnime";
import { NextInformation } from "./NextInformation";

export const ListNext = () => {
  const { informationChapter } = useAnime();

  return (
    <>
      <Typography marginY={6}></Typography>

      <Grid container spacing={3}>
        <NextInformation informationChapter={informationChapter} />
      </Grid>
    </>
  );
};

export default ListNext;
