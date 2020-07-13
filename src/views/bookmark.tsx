import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RecipeCard from '../components/recipe';
import Container from '@material-ui/core/Container';
import data from '../data';

const useStyles = makeStyles({
    root: {
      display: "flex",
      overflow: "auto",
      flexWrap: "wrap",
    },
    media: {
      height: 140,
    },
  });


  export default function Bookmark() {
    const classes = useStyles();
    const [fullData, setfullData] = useState({});


    useEffect(() => {
        setfullData(data)
    }, []); 
    
  
    return (
      <Container className={classes.root}>
      {data.map((element) => <RecipeCard title={element.title} image={element.image} />)}
      </Container>
    );
  }


