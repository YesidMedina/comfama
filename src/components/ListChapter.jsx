import { useEffect } from "react";
import { Grid, Slider, Typography, Button } from "@mui/material";
import CarouselSlider from "react-material-ui-carousel";
import useAnime from "../hooks/useAnime";
import { Information } from "./Information";


export const ListChapter = () => {
  const { info } = useAnime();

  return (
    <>
      <Typography></Typography>
      <Grid item width={200} height={200} sx={{ mt: 6, ml: 10 }}>
        <CarouselSlider>
          {info?.data?.map((information, i) => (
            <Information key={i} information={information} />
          ))}
        </CarouselSlider>
      </Grid>
    </>
  );
};

export default ListChapter;
