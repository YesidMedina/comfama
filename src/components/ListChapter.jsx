import { Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import useAnime from "../hooks/useAnime";
import { Information } from "./Information";

export const ListChapter = () => {
  const { info } = useAnime();

  return (
    <>
      <Typography marginY={6}></Typography>
      <Grid container spacing={6}>
        {info?.data?.map((information, index) => (
          <Information key={index} information={information} />
        ))}
      </Grid>
      {/* <Grid item width={200} height={200} sx={{ mt: 6, ml: 10 }}>
        <Carousel>
          {info?.data?.map((information, index) => (
            <Information key={index} information={information} />
          ))}
        </Carousel>
      </Grid> */}
    </>
  );
};

export default ListChapter;
