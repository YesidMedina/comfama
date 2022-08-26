import { Card, CardActions, CardContent, CardMedia, ImageList } from "@mui/material";
import { Link, Typography, Grid } from "@mui/material";
import useAnime from "../hooks/useAnime";

export const Information = ({ information }) => {
  const { getInformationChapter } = useAnime();
  
  const { images:{jpg:{image_url}}, title } = information;
  
  return (
    <Grid item md={6} lg={6} >
      <Card>
        <Link
          href="/Next"
          onClick={() => {
            getInformationChapter(information);
          }}
          // key={info}
        >
        <Grid >
          <CardMedia component="img" image={image_url} />
        </Grid>  
        </Link>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};
