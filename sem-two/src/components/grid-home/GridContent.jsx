import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
        <div className={classes.root}>
          <img src={props.image}  className={'gallery-images'}  alt={''} />
      </div>
    )
}


export default GridContent

