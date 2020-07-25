import React, { FormEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "75ch",
      variant: "outlined",
    },
  },
}));

export default function App() {
  const [fields, setFields] = React.useState([{ value: "" }]);
  const classes = useStyles();
  function handleChange(i: number, event: any) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: "" });
    setFields(values);
  }

  function handleRemove(i: number) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <Grid container direction="column" alignItems="center">
      <form className={classes.root} noValidate autoComplete="off">
        {fields.map((field, id) => {
          return (
            <div key={`${field}-${id}`}>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Enter Ingrediant"
                  variant="outlined"
                  value={field.value}
                  placeholder="Carrot"
                  onChange={(e: any) => handleChange(id, e)}
                />

                <IconButton aria-label="clear" onClick={() => handleRemove(id)}>
                  <ClearIcon />
                </IconButton>
              </Grid>
            </div>
          );
        })}
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="flex-end"
            justify="flex-end"
          >
            <Grid item>
              <IconButton aria-label="add" onClick={() => handleAdd()}>
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
