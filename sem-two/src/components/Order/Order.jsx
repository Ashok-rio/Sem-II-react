import React,{useState, useEffect} from 'react'
import Header from "../Header/Header";
import {Row , Col}from 'reactstrap'
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Card, Container,Button} from '@material-ui/core';

import img from '../../img/image 77.png'
import './order.css'

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
      marginTop: '20%'
    },title:{
        borderBottom:'0.5px'
    },
    description:{
        marginTop:50
    }
  }));
  
function Order(props) {
    const classes = useStyles()
    return (
        <div>
            <Header/>
                    <Container>
                    <Card className = {classes.media}>
                        <Row className={'heading-orderLists'}>
                        <Typography gutterBottom variant="h5" component="h2" clasName={classes.title}>Order List</Typography>
                        </Row>
                        <Row>
                            <Card className={'row-cont-orderList'}>
                                <Row>
                                    <Col md={'3'}>
                                        <div className={'img-cont-orderList'}>
                                        <img src={img} className={'w-100'} />
                                        </div>
                                    </Col>
                                    <Col md={'3'}>
                                        <Typography className={classes.description}>

                                            ithu oru product
                                        </Typography>
                                    </Col>
                                    <Col md={'3'}>
                                        
                                    <Typography className={classes.description}>
                                        quantity1
                                </Typography>
                                    </Col>
                                    <Col md={'3'}>
                                        <Row>
                                        <Typography className={classes.description}>
                                            RS:125
                                            </Typography>
                                        </Row>
                                        <Row>
                                            <Button variant="contained" className={classes.description}>
                                                View Details
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                    </Card>
                    </Container>
        </div>
    )
}


export default Order

