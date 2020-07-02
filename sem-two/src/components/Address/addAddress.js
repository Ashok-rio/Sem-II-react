import React, { useState, useEffect } from "react";
import {
  Button,
  Label,
  FormGroup,
  Form,
  Container,
  Input,
  Row,
  Col,
} from "reactstrap";
import "./address.css";

export default function Address(props) {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    town: "",
    city: "",
    state: "",
    type: "",
  });
  const [message, setMessage] = useState("");

  const handles = () => {
       
  }

  return (
    <Container fluid={true}>
      <Form onSubmit={handles}>
        <Row style={{ padding: "90px 30px 30px 30px" }}>
          <Col lg={6}>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="name"
                  id="exampleEmail"
                  placeholder="Full Name"
                  onChange={(e) => {
                    if (e.target.value.length > 3) {
                      setAddress({
                        name: e.target.value,
                      });
                    } else {
                      setAddress({
                        name: e.target.value,
                      });
                      setMessage("please Enter the valid name");
                    }
                  }}
                  style={{
                    margin: "8px 0",
                    boxSizing: "border-box",
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "90%",
                    padding: "12px 20px",
                  }}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col lg={6}>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="phone"
                  id="exampleEmail"
                  placeholder="Mobile.No"
                  onChange={(e) => {
                    if (e.target.value.length === 10) {
                      setAddress({
                        phone: e.target.value,
                      });
                    } else {
                      setAddress({
                        phone: e.target.value,
                      });
                      setMessage("please Enter the valid phone");
                    }
                  }}
                  style={{
                    margin: "8px 0",
                    boxSizing: "border-box",
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "90%",
                    padding: "12px 20px",
                  }}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row style={{ padding: "25px 30px 25px 30px" }}>
          <Col lg={12}>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="Address"
                  id="exampleEmail"
                  placeholder="Address(House.No,Buildin,Street,Area)"
                  onChange={(e) => {
                    if (e.target.value.length > 29) {
                      setAddress({
                        address: e.target.value,
                      });
                    } else {
                      setAddress({
                        address: e.target.value,
                      });
                      setMessage("please Enter the valid address");
                    }
                  }}
                  style={{
                    margin: "8px 0",
                    boxSizing: "border-box",
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "95%",
                    padding: "12px 20px",
                  }}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row style={{ padding: "25px 30px 25px 30px" }}>
          <Col lg={6}>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="town"
                  id="exampleEmail"
                  placeholder="Locality / Town"
                  onChange={(e) => {
                    setAddress({
                      town: e.target.value,
                    });
                  }}
                  style={{
                    margin: "8px 0",
                    boxSizing: "border-box",
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "90%",
                    padding: "12px 20px",
                  }}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col lg={6}>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="city"
                  id="exampleEmail"
                  placeholder="city / District"
                  onChange={(e) => {
                    setAddress({
                      city: e.target.value,
                    });
                  }}
                  style={{
                    margin: "8px 0",
                    boxSizing: "border-box",
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "90%",
                    padding: "12px 20px",
                  }}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row style={{ padding: "25px 30px 25px 30px" }}>
          <Col lg={6}>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="text"
                  name="email"
                  id="exampleEmail"
                  placeholder="State"
                  onChange={(e) => {
                    setAddress({
                      state: e.target.value,
                    });
                  }}
                  style={{
                    margin: "8px 0",
                    boxSizing: "border-box",
                    border: "none",
                    borderBottom: "2px solid black",
                    width: "90%",
                    padding: "12px 20px",
                  }}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <FormGroup tag="fieldset" style={{ padding: "20px" }}>
              <legend style={{ position: "relative", left: "-310px" }}>
                Select Address Type:
              </legend>
              <Row>
                <Col lg={4}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="type"
                        value="home"
                        onChange={(e) => {
                          setAddress({
                            type: e.target.value,
                          });
                        }}
                      />
                      Home
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="type"
                        value="home"
                        onChange={(e) => {
                          setAddress({
                            type: e.target.value,
                          });
                        }}
                      />
                      Office/Commercial
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Button
              style={{
                color: "white",
                width: "80%",
                height: "100px",
                backgroundColor: "#f3852a",
                position: "relative",
                left: "-50px",
                top: "20px",
              }}
            >
              Cancel
            </Button>
          </Col>
          <Col lg={6}>
            <Button
            type='submit'
              style={{
                color: "white",
                width: "80%",
                height: "100px",
                backgroundColor: "#0979f9",
                position: "relative",
                left: "-50px",
                top: "20px",
              }}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
