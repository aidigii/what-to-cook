import React, { useState, useEffect, FormEvent } from "react";
import RecipeCard from "../components/recipe";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import data from "../data";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "75ch",
      variant: "outlined",
    },
  },
}));

export default function MultilineTextFields() {
  const size = data.length - 1;
  const classes = useStyles();
  const [title, setTitle] = useState(data[0].title);
  const [image, setImage] = useState(data[0].image);
  const [index, setIndex] = useState(1);
  const [fields, setFields] = React.useState([{ value: "" }]);

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

  const moveForward = () => {
    setIndex((prevIndex) => prevIndex + 1);
    changeCard();
  };

  const changeCard = () => {
    if (index <= size) {
      setTitle(data[index].title);
      setImage(data[index].image);
    }
  };

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

      <RecipeCard title={title} image={image} />
      <Wrapper>
        <Button onClick={moveForward}>Like</Button>
        <Button onClick={moveForward}>Dislike</Button>
      </Wrapper>
    </Grid>
  );
}
