import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Grid } from "@material-ui/core";
import { CardBody, Card, Col, Row, Button } from "reactstrap";
// import { makeStyles } from "@material-ui/core/styles";
import img from "../../img/image 77.png";
import ProductImage from "../Product/ProductImage";
import "./order.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 300,
//     marginTop: "20%",
//   },
//   title: {
//     borderBottom: "0.5px",
//   },
//   description: {
//     marginTop: 50,
//   },
// }));

const Order = (props) => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ padding: "1%", marginTop: "100px", marginLeft: "60px" }}
      >
        <Row>
          <Col md={12}>
            <Card
              style={{
                width: "90%",
                backgroundColor: "#f5f5f5",
                color: "black",
              }}
              className={"paymentOptionCard"}
            >
              <CardBody>
                <div style={{ padding: "2%" }}>
                  <p style={{ marginLeft: "15px" }}>ORDER DETAILS</p>
                  <hr />
                  <div style={{ padding: "3%", backgroundColor: "#dddddd" }}>
                    <Row>
                      <Col md={12} style={{ padding: "1%" }}>
                        <Row>
                          <Col md={3} style={{ padding: "1%" }}>
                            <ProductImage src={img} className={"orderImage"} />
                          </Col>
                          <Col md={3} style={{ padding: "1%" }}>
                            A set of two beautiful looking personalized
                            plantersand
                          </Col>
                          <Col md={3} style={{ padding: "1%" }}>
                            Quantity 1
                          </Col>
                          <Col md={3} style={{ padding: "1%" }}>
                            <Row>
                              <Col
                                style={{
                                  textAlign: "right",
                                  color: "blue",
                                  fontSize: "25px",
                                }}
                              >
                                Rs. 975
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={3}></Col>
                      <Col md={3}></Col>
                      <Col md={3}></Col>
                      <Col md={3}>
                        <Button style={{ width: "100%" }}>View details</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default Order;
