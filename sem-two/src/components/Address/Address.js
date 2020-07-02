import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "reactstrap";
import { MdAddCircleOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Header from "./../Header/Header";
import {
  getAllAddress,
  getCart,
  createOrder,
} from "./../../service/ApiService";

export default function Address(props) {
  const [address, setAddress] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState("");
  const [message, setMessage] = useState("");

  useEffect(async () => {
    try {
      const responce = await getAllAddress();
      if (responce) {
        setAddress(responce.address);
      }
    } catch (e) {}
  }, []);

  const Order = async () => {
    if (order !== "") {
      try {
        const result = await createOrder(order);
        if (result) {
          console.log("created successfully");
          window.location.pathname = "/payment";
        }
      } catch (e) {}
    } else {
      setMessage("please select the address");
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        var result = await getCart();
        if (result.success === true) {
          setCart(result.carts[0]);
          console.log(cart);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true}>
        <Row>
          <Col lg={8}>
            <Container>
              <Row>
                <Col lg={12}>
                  <h1
                    style={{ position: "absolute", top: "100px", left: "20px" }}
                  >
                    Select Delivery Address
                  </h1>
                </Col>
              </Row>
              <Row style={{ padding: "190px 0px 0px 0px" }}>
                {address.map((x, i) => {
                  return (
                    <Col lg={6} key={i}>
                      <Card
                        onClick={() => {
                          setOrder(x._id);
                        }}
                        style={{
                          width: "80%",
                          height: "450px",
                          margin: "5%",
                          padding: "110px 100px 100px 100px",
                          textAlign: "center",
                        }}
                      >
                        <Button
                          href={`/address/edit/${x._id}`}
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "yellow",
                            color: "black",
                            width: "40px",
                            height: "40px",
                            position: "absolute",
                            top: "7px",
                            left: "7px",
                          }}
                        >
                          <FiEdit />
                        </Button>
                        <h4>{x.name},</h4>
                        <p>{x.address}</p>
                        <span>
                          {x.town},{x.city}
                        </span>
                        <span>{x.state}</span>
                        <span>Place:{x.type}</span>
                        <span>PH:{x.phone}</span>
                        <span
                          style={{
                            position: "absolute",
                            bottom: "7px",
                            right: "7px",
                          }}
                        >
                          {order === x._id ? (
                            <IoIosCheckmarkCircle
                              size={"5em"}
                              color={"green"}
                            />
                          ) : null}
                        </span>
                      </Card>
                    </Col>
                  );
                })}
                <Col lg={6}>
                  <Card
                    style={{
                      width: "80%",
                      height: "450px",
                      margin: "5%",
                      padding: "140px",
                    }}
                  >
                    <MdAddCircleOutline size={"10em"} />
                    <h4>Add Address</h4>
                  </Card>
                </Col>
              </Row>
            </Container>
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
                  <Card
                    style={{ margin: "50px 0px 150px 0px", padding: "30px" }}
                  >
                    <img
                      src={cart.url}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <h4 style={{ margin: "50px" }}>
                      price:{Math.floor(cart.price * cart.quantity)}
                    </h4>
                  </Card>
                  <span
                    style={{
                      color: "red",
                      position: "relative",
                      top: "-100px",
                    }}
                  >
                    {message ? message : null}
                  </span>
                  <Button
                    onClick={Order}
                    style={{
                      backgroundColor: "#f14e6c",
                      width: "90%",
                      height: "50px",
                      position: "relative",
                      top: "-65px",
                      left: "25px",
                    }}
                  >
                    Proceed
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}