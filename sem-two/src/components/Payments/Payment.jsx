import React,{ useState } from "react";
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

    const [paymenet, setPayment] = useState('');
    const classes = useStyles();
    
    const paymentSelect = async (e) => {
        e.preventDefault();
        console.log(paymenet);
    }

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true} style={{ padding: "2%" }}>
        <Grid container spacing={4} className={classes.root}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Row>
              <Col md={12}>
                <Card style={{ width: "100%", padding: "5%" }}>
                  <CardBody>hello</CardBody>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={12}>
                <Card style={{ width: "80%", padding: "5%" }}>
                  <CardBody>
                    <h2>Select Payment Method</h2>
                    <div style={{ padding: "12%" }}>
                      <Form onSubmit={paymentSelect}>
                        <Card style={{ textAlign: "center" }}>
                          <CardBody>
                            <Row>
                              <Col md={1}></Col>
                              <Col md={3}>
                                <Input type="radio" name="payment" value={'COD'} onChange={(e) => setPayment(e.target.value)} />
                              </Col>
                              <Col md={5}>
                                <span>Cash on Delivery</span>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <br />
                        <Card style={{ textAlign: "center" }}>
                          <CardBody>
                            <Row>
                              <Col md={1}></Col>
                              <Col md={3}>
                                <Input type="radio" name="payment" value={'debit'} onChange={(e) => setPayment(e.target.value)} />
                              </Col>
                              <Col md={5}>
                                <span>Debit / Credit Card</span>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        <br />
                        <Button
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
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Payment;