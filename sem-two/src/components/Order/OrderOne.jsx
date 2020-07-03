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
        style={{ padding: "5%", marginTop: "100px", marginLeft: "60px" }}
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
                  <Col md={3} style={{ padding: "3%" }}>
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
                  <Col
                    md={12}
                    style={{ padding: "3%", backgroundColor: "#dcdcdc" }}
                  >
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
          <Col style={{ marginTop: "70px" }}>
            <Card
              style={{
                border: "none",
                borderLeft: "4px solid #C4C4C4",
                height: "400px",
              }}
            >
              <CardBody>
                <Row style={{ marginTop: "-20px" }}>
                  <Col md={3}>
                    <Button
                      style={{
                        position: "absolute",
                        marginLeft: "-40px",
                        width: "30%",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#e0e337",
                        border: "1px solid #e0e337",
                      }}
                    ></Button>
                  </Col>
                  <Col md={9}> Order Approved</Col>
                </Row>

                <Row style={{ marginTop: "167px" }}>
                  <Col md={3}>
                    <Button
                      style={{
                        position: "absolute",
                        marginLeft: "-40px",
                        width: "30%",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#f3852a",
                        border: "1px solid #f3852a",
                      }}
                    ></Button>
                  </Col>
                  <Col md={9}> Order Placed</Col>
                </Row>
                <Row style={{ marginTop: "145px" }}>
                  <Col md={3}>
                    <Button
                      style={{
                        position: "absolute",
                        marginLeft: "-40px",
                        width: "30%",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#4fa845",
                        border: "1px solid #4fa845",
                      }}
                    ></Button>
                  </Col>
                  <Col md={9}> Order Delivered</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}>
            <Button
              style={{
                width: "100%",
                height: "100px",
                color: "white",
                fontWeight: "600",
                backgroundColor: "#0979f9",
              }}
            >
              Back to Home
            </Button>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default OrderOne;
