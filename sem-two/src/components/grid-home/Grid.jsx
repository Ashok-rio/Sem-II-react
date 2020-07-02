import React from 'react'
import Gall from './GridContent'
import {AppBar,Avatar, Toolbar, Typography,InputBase, Button, IconButton,} from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import GridContent from './GridContent'
import Images from './images'
import './gall.css'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    title:{
        marginTop:'4%',
        color: '#412828',
        flex:1,
        textAlign:'center'
    },
    Itemdesign:{
        boxShadow:'none',
        border: 'none'
    }
    
  }));
  
//   const GalleryImgs  = () =>{
//       return Images.map(data =>(
          
//       ))
//   }

function GridImgs(props) {
      const classes = useStyles();
    return (
        <div>
            <Typography  variant='h2' className={classes.title}>
           CELEBRATE A HERITAGE
          </Typography>
          <Grid container className={classes.root} spacing={10} style={{padding:'4%'}}>
           {Images.map(data =>{
            return(<Grid item xs={3} className={classes.Itemdesign} >
                <GridContent image={data}/>
            </Grid>)
           })}
            </Grid>
        </div>
    )
}



export default GridImgs

