import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Grid } from "@material-ui/core";
import { CardBody, Card, Col, Row, Button } from "reactstrap";
// import { makeStyles } from "@material-ui/core/styles";
import img from "../../img/image 77.png";
import ProductImage from "../Product/ProductImage";
import "./order.css";

const OrderOne = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ padding: "2%", marginTop: "100px", marginLeft: "60px" }}
      >
        <Row>
          <Col lg={8}>
            <Card
              style={{
                padding: "2%",
                width: "90%",
                backgroundColor: "#f5f5f5",
                color: "black",
              }}
              className={"paymentOptionCard"}
              
                      >
                          <CardBody>
                              <Row>
                                  <Col md={12}>
                                      <h4>ORDER DETAILS</h4>
                                  </Col>
                              </Row>
                          </CardBody>
                          <hr />
              <CardBody>
                <Row>
                  <Col md={3} style={{padding:'3%'}}>
                    <ProductImage src={img} className={"orderImage"} />
                  </Col>
                  <Col md={1}></Col>
                  <Col
                    md={8}
                    style={{ padding: "2%", backgroundColor: "#dcdcdc" }}
                  >
                    <h5>Gift Set</h5>
                    <br />
                    <p>
                      A set of two beautiful looking personalized plantersand
                    </p>
                    <br />
                    <h6>Quantity 1</h6>
                    <br />
                    <h4 style={{ fontWeight: "600", color: "blue" }}>
                      Rs. 675
                    </h4>
                  </Col>
                </Row>
                          </CardBody>
                          <CardBody>
                              <Row>
                                  <Col md={12} style={{ padding: "3%", backgroundColor: "#dcdcdc" }}>
                                      <h5>Name</h5>
                                      <p>2/448,sowdaswari nagar</p>
                                      <p>3rd street,veerapandi</p>
                                      <p>Tiruppur - 641605</p>
                                      <p>TamilNadu.</p>
                                  </Col>
                              </Row>
                          </CardBody>
            </Card>
                  </Col>
                  <Col>
                      Hello
                  </Col>
        </Row>
          </Grid>
    </React.Fragment>
  );
};

export default OrderOne;
