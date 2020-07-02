import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { CardBody, Card, Col, Row, Form } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForm from "../../hooks/useForm";

const PaymentCard = () => {
  const [values, handleChanger] = useForm();
  const initialState = new Date();
  const [startDate, setStartDate] = useState(initialState);

  const paymentAccount = async () => {
    console.group("Account");
    console.log("Values", values);
    console.log("Date", startDate);
    console.groupEnd();
  };
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
            <Card style={{ padding: "5%" }}>
              <CardBody>
                <Form onSubmit={paymentAccount}>
                  <Row>
                    <Col md={12} style={{ padding: "2%" }}>
                      <input
                        type="text"
                        name="cardname"
                        className={"cardInputFiled"}
                        placeholder="Card Holder Name"
                        value={values.cardname || ""}
                        onChange={handleChanger}
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={12} style={{ padding: "2%" }}>
                      <input
                        type="password"
                        name="cardnumber"
                        className={"cardInputFiled"}
                        placeholder="Card Number"
                        value={values.cardnumber || ""}
                        onChange={handleChanger}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} style={{ padding: "6.3%" }}>
                      <div style={{ width: "100%" }}>
                        Expiration Date :&nbsp; : &nbsp;&nbsp;&nbsp;
                        <DatePicker
                          style={{ border: "none" }}
                          name="expriy"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </Col>
                    <Col md={6} style={{ padding: "2%" }}>
                      <input
                        type="password"
                        name="cvv"
                        className={"cardInputFiled"}
                        placeholder="CVV"
                        value={values.cvv || ""}
                        onChange={handleChanger}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Button
                        type="submit"
                        style={{
                          width: "100%",
                          height: "60px",
                          backgroundColor: "#0979f9",
                          color: "white",
                        }}
                      >
                        Pay Now
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentCard;
