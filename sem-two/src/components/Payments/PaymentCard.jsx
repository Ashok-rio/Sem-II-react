import React from 'react'
import { Grid } from "@material-ui/core";
import {
    CardBody,
    Card,
    Col,
    Row,
    Form,
  } from "reactstrap";
const  PaymentCard = () => {
    return (
        <React.Fragment>
            <Grid
            item
            lg={8}
            md={12}
            sm={12}
            xs={12}
            style={{ borderRight: "1px solid black", padding: "2%" }}
          >
            <Row>
              <Col md={12}>
                <Card style={{padding:'5%'}}>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md={12} style={{padding:'2%'}}>
                          <input type="text" name="cardnumber" className={'cardInputFiled'} placeholder="Card Holder Name" />
                        </Col>
                      </Row>
                      <br/>
                      <Row>
                        <Col md={12} style={{padding:'2%'}}>
                          <input type="text" name="cardnumber" className={'cardInputFiled'} placeholder="Card Number" />
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Grid>
        </React.Fragment>
    )
}

export default PaymentCard
