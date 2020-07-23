import React, { useState, useEffect } from "react";
import RecipeCard from '../components/recipe';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import data from '../data';
import styled from 'styled-components'; 


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
  const size = data.length-1; 
  const classes = useStyles();
  const [title, setTitle] = useState(data[0].title);
  const [image, setImage] = useState(data[0].image);
  const [index, setIndex] = useState(1); 

  const moveForward = () => {
    setIndex(
      prevIndex => prevIndex + 1
    )
    changeCard();
  }; 

  const changeCard = () => {
    if(index <= size){
      setTitle(data[index].title);
      setImage(data[index].image);
    }
  }; 
  
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
      
      <RecipeCard title={title} image={image}/>
      <Wrapper>
      <Button onClick={moveForward}>Like</Button>
      <Button onClick={moveForward}>Dislike</Button>
      </Wrapper>
    </Grid>
  );
}
