import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "reactstrap";
import "./address.css";
import { MdAddCircleOutline } from "react-icons/md";

export default function Address(props) {
  const [address, setAddress] = useState([]);
  const [upAddress, setUpAddress] = useState([]);
  const [extra, setExtra] = useState([]);
  const [value, setValue] = useState([]);
  const [item, setItem] = useState([]);
  const [item1, setItem1] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [removeAdd, setRemoveAdd] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [addressId, setAddressId] = useState([]);
  const delivery = ["Home", "Work-Working Days", "Work-Any Day"];

  return (
    <Container fluid={true}>
      <Row>
        <Col lg={8}>
          <h3 style={{position:"relative",left:"-430px",paddingTop:"40px"}}>Select Delivery Address</h3>
          <Row>
            <Col lg={6}>
              <Card
                style={{
                  width: "80%",
                  height: "550px",
                  margin: "5%",
                  padding: "150px",
                }}
              >
                <MdAddCircleOutline size={"10em"} />
                <h4>Add Address</h4>
              </Card>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Col>
        <Col lg={4} style={{ padding: "80px 30px 30px 30px" }}>
          <Container>
            <Row>
              <Col lg={1}>
                <div
                  style={{
                    backgroundColor: "#c4c4c4",
                    height: "100%",
                    width: "3px",
                  }}
                ></div>
              </Col>
              <Col lg={11}>
                <Card style={{ margin:"50px 0px 150px 0px",padding: "30px" }}>
                  <img
                    src="https://www.adelaidereview.com.au/content/uploads/2019/05/Image-of-a-supermassive-black-hole-created-from-data-captured-by-the-Event-Horizon-Telescope-EHT-850x850.jpg"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <h4 style={{ margin: "50px" }}>price:350</h4>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
