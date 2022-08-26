import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link, Typography, Grid } from "@mui/material";
import useAnime from "../hooks/useAnime";

export const Information = ({ information }) => {
  const { getInformationChapter } = useAnime();

  const {
    images: {
      jpg: { image_url },
    },
    title,
  } = information;

  return (
    <Grid item md={2.2} lg={2.2}>
      <Card>
        <Link
          href="/Next"
          onClick={() => {
            getInformationChapter(information);
          }}
        >
          <Grid>
            <CardMedia
              component="img"
              image={image_url}
              height={"auto"}
              max-width={100}
            />
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
