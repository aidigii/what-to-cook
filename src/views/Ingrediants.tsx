import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "75ch",
      variant: "outlined",
    },
  },
}));

function createfields() {
  return (
    <TextField
      id="outlined-basic"
      label="Enter Ingredient"
      variant="outlined"
      placeholder="Carrot"
    />
  );
}

export default function MultilineTextFields() {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <form className={classes.root} noValidate autoComplete="off">
        <Grid item>{createfields()}</Grid>
        <Grid item>{createfields()}</Grid>
        <Grid item>{createfields()}</Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            justify="flex-end"
          >
            <Grid item>
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
