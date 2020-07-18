import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  largeAvatar: {
    height: 200,
    width: 200,
  },
  cardContain: {
    display: "flex",
    alignContent: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5%",
    justifyContent: "center",
  },
});

export default function User() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContain}>
        <Avatar
          src="https://picsum.photos/200/300"
          className={classes.largeAvatar}
        />
        <div className={classes.info}>
          <Typography variant="h5" component="h2">
            Aliah Shaira De Guzman
          </Typography>
          <Typography variant="body2" component="p">
            Email:
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
