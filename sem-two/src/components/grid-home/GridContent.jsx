import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import './gall.css'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }); 

const GridContent = props => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
          <img src={props.image}  className={'gallery-images'} />
      </Card>
    )
}


export default GridContent

