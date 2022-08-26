import { useEffect, useState } from "react";
import { Button, CardMedia, Container, Typography, Grid } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import useAnime from "../hooks/useAnime";

export const NextInformation = () => {
  const { getMessageScore } = useAnime();
  const [informationChapter] = useState(
    JSON.parse(window.localStorage.getItem("chapter"))
  );
  const [message, setMessage] = useState('')

  const {
    images:{jpg:{image_url}},
    title,
    score,
    duration,
    synopsis,
    titles:{type},
    
  } = informationChapter;

  useEffect(()=>{
    getMessageScore(score).then((data)=>setMessage(data));
    
  },[message])
  
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
        <Grid item width={300} height={300} sx={{ mx: -12 }} >
          <CardMedia component="img" image={image_url} />
        </Grid>

        <Grid sx={{ mt: -32, ml: 32 }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">Puntuacion: {score} - {message}</Typography>
          <Typography variant="h6">Duración: {duration}</Typography>
          <Typography variant="body1">{synopsis}</Typography>
          <Typography variant="h6">
            Lenguages: {type}
          </Typography>
          <Grid item>
            <Typography variant="body2">
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
