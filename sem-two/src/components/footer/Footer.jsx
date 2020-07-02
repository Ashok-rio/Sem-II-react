import React from 'react'
import {AppBar,Avatar, Toolbar, Typography,InputBase, Button, Fab,useScrollTrigger, Zoom,  IconButton,} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Row,Col} from 'reactstrap'
import './footer.css'
const useStyles = makeStyles((theme) => ({
  root:{

  }  ,button:{
        flex:2,
        backgroundColor:'#412828',
        color:'white'
    }
  }));
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function Footer(props) {
    const classes = useStyles();
    return (
        <div>
              
      
        <Button variant="contained" fullWidth={true} onClick={topFunction} className={classes.button}>Back To Top</Button> 
        <div className={'footer-home'}>
            <Row>
                <Col md='4'>
                    <ul className={'ul-footer'}>
                        <li className={'footer-heading'}>THE INDIA CRAFT HOUSE</li>
                        <li className={'footer-list'}>ABOUT US </li>
                        <li className={'footer-list'}>MISSION </li>
                        <li className={'footer-list'}>CONTACT US </li>
                    </ul>
                </Col>
                <Col  md='4'>
                <ul className={'ul-footer'}>
                        <li className={'footer-heading'}>
                            SHOP
                        </li>
                        <li className={'footer-list'}>MY ACCOUNT  </li>
                        <li className={'footer-list'}>REWARD PROGRAMS </li>
                        <li className={'footer-list'}>GIFT CARDS </li>
                    </ul>
                </Col>
                <Col  md='4'>
                <ul className={'ul-footer'}>
                        <li className={'footer-heading'}>HELP</li>
                        <li className={'footer-list'}>CUSTOMER </li>
                        <li className={'footer-list'}>HOW TO ORDER </li>
                        <li className={'footer-list'}>PAYMENTS </li>
                    </ul>
                </Col>
            </Row>
        </div>
          
        </div>
    )
}



export default Footer

