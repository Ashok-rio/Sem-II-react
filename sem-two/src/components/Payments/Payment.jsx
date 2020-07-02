import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CardBody,
  Card,
  Col,
  Row,
  Button,
  Input,
  Form,
} from "reactstrap";
import Header from "../Header/Header";
import "./payment.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(5),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Payment = () => {
  const [paymenet, setPayment] = useState("");
  const classes = useStyles();

  const paymentSelect = async (e) => {
    e.preventDefault();
    console.log(paymenet);
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true} style={{ padding: "2%", marginTop: "35px" }}>
        <Grid container spacing={4} className={classes.root}>
          <Grid
            item
            lg={8}
            md={12}
            sm={12}
            xs={12}
            style={{ borderRight: "1px solid black" }}
          >
            <Row>
              <Col md={12}>
                <Card style={{ width: "100%", padding: "5%", border: "none" }}>
                  <CardBody>hello</CardBody>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Card style={{ width: "60%", padding: "5%", border: "none" }}>
                  <CardBody>
                    <h2>Select Payment Method</h2>
                    <br />
                    <div style={{ padding: "8%", backgroundColor: "#f1f1f1" }}>
                      <Form onSubmit={paymentSelect}>
                        <Card
                          style={{ textAlign: "center" }}
                          className={"paymentOptionCard"}
                        >
                          <CardBody>
                            <Row>
                              <Col md={1}></Col>
                              <Col md={3}>
                                <Input
                                  type="radio"
                                  name="payment"
                                  value={"COD"}
                                  onChange={(e) => setPayment(e.target.value)}
                                />
                              </Col>
                              <Col md={5}>
                                <span>Cash on Delivery</span>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <br />
                        <Card
                          style={{ textAlign: "center" }}
                          className={"paymentOptionCard"}
                        >
                          <CardBody>
                            <Row>
                              <Col md={1}></Col>
                              <Col md={3}>
                                <Input
                                  type="radio"
                                  name="payment"
                                  value={"debit"}
                                  onChange={(e) => setPayment(e.target.value)}
                                />
                              </Col>
                              <Col md={5}>
                                <span>Debit / Credit Card</span>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <br />
                        <Button
                          className={"paymentOptionCard"}
                          style={{
                            width: "100%",
                            height: "60px",
                            backgroundColor: "#0979f9",
                            color: "white",
                          }}
                        >
                          Continue
                        </Button>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12} style={{ padding: "2%" }}>
            <Row>
              <Col md={12}>
                <Card style={{ width: "90%", height: "350px" ,backgroundColor:'#f5f5f5',color:'black'}} className={"paymentOptionCard"}>
                  <CardBody>
                    <div>
                      <p style={{ marginLeft: "15px" }}>PRICE DETAILS</p>
                      <hr />
                      <div style={{ padding: "3%" }}>
                        <Row>
                          <Col md={6}>Personalised Gift Set</Col>
                          <Col md={6} style={{ textAlign: "right" }}>
                            Rs.500
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col md={6}>Delivery Charges</Col>
                          <Col md={6} style={{ textAlign: "right" }}>
                            Rs.50
                          </Col>
                        </Row>
                      </div>
                      <div style={{ padding: "3%" ,marginTop: "70px" }}>
                      <hr />
                        <Row style={{padding:'2%'}}>
                          <Col md={6}>Total Charges</Col>
                          <Col
                            md={6}
                            style={{ textAlign: "right", color: "blue" }}
                          >
                            Rs.875
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Payment;
