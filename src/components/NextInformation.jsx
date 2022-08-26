import { useEffect, useState } from "react";
import { Button, CardMedia, Container, Typography, Grid } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import useAnime from "../hooks/useAnime";

export const NextInformation = () => {
  const { getMessageScore } = useAnime();
  const [informationChapter] = useState(
    JSON.parse(window.localStorage.getItem("chapter"))
  );
  const [message, setMessage] = useState("");

  const {
    images: {
      jpg: { image_url },
    },
    title,
    score,
    duration,
    synopsis,
  } = informationChapter;

  useEffect(() => {
    getMessageScore(score).then((data) => setMessage(data));
  }, [message]);

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
        <Grid item width={300} height={300} sx={{ mx: -12 }}>
          <CardMedia component="img" image={image_url} />
        </Grid>

        <Grid sx={{ mt: -36, ml: 32 }}>
          <Typography sx={{ border: 1 }} color="primary" variant="h6">
            {message} _Score: {score}
          </Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">Score: {score}</Typography>
          <Typography variant="h6">Time: {duration}</Typography>
          <Typography variant="body1">{synopsis}</Typography>
          <Typography variant="h6">Lenguages:</Typography>
          <Grid item>
            <Typography variant="body2">
              <Button
                variant="outlined"
                color="inherit"
                disabled
                style={{ marginBottom: 20 }}
              >
                Japanese
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                disabled
                style={{ marginBottom: 20 }}
              >
                English
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
