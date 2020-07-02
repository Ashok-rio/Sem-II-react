import React, { useState } from "react";
import { Container, CardBody, Card } from "reactstrap";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Images from "../Images/image 95.png";
import ProductImage from "../Product/ProductImage";
import StarIcon from "@material-ui/icons/Star";

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

const SimilarProduct = () => {
  const classes = useStyles();
  const [star] = useState(2);

  return (
    <React.Fragment>
      <Container fluid={true} style={{ padding: "3%" }}>
        <Grid container spacing={4} className={classes.root}>
          <Grid item xs={4}>
            <Card className={'productCardBox'}>
              <CardBody style={{ textAlign: "center" }}>
                <ProductImage src={Images} className={"similarProductImages"} />
              </CardBody>
              <br />
              <CardBody>
                <div className={"similarProductText"}>
                  <p>Hand maded traditional Doll</p>
                  <p style={{ color: "#f04e6b" }}>Rs : 200</p>
                  <p>
                    <span>
                      <StarIcon className={star >= 1?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 2?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 3?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 4?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 5?'withratingColor': 'withoutRatingColor'} />
                    </span>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Grid>
          {/* 2nd */}
          <Grid item xs={4}>
            <Card className={'productCardBox'}>
              <CardBody style={{ textAlign: "center" }}>
                <ProductImage src={Images} className={"similarProductImages"} />
              </CardBody>
              <br />
              
              <CardBody>
                <div className={"similarProductText"}>
                  <p>Hand maded traditional Doll</p>
                  <p style={{ color: "#f04e6b" }}>Rs : 200</p>
                  <p>
                    <span>
                      <StarIcon className={star >= 1?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 2?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 3?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 4?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 5?'withratingColor': 'withoutRatingColor'} />
                    </span>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Grid>
          {/* 3rd */}
          <Grid item xs={4}>
            <Card className={'productCardBox'}>
              <CardBody style={{ textAlign: "center" }}>
                <ProductImage src={Images} className={"similarProductImages"} />
              </CardBody>
              <br />
              
              <CardBody>
                <div className={"similarProductText"}>
                  <p>Hand maded traditional Doll</p>
                  <p style={{ color: "#f04e6b" }}>Rs : 200</p>
                  <p>
                    <span>
                      <StarIcon className={star >= 1?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 2?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 3?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 4?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 5?'withratingColor': 'withoutRatingColor'} />
                    </span>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Grid>
          {/* 4rd */}
          <Grid item xs={4}>
            <Card className={'productCardBox'}>
              <CardBody style={{ textAlign: "center" }}>
                <ProductImage src={Images} className={"similarProductImages"} />
              </CardBody>
              <br />
              
              <CardBody>
                <div className={"similarProductText"}>
                  <p>Hand maded traditional Doll</p>
                  <p style={{ color: "#f04e6b" }}>Rs : 200</p>
                  <p>
                    <span>
                      <StarIcon className={star >= 1?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 2?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 3?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 4?'withratingColor': 'withoutRatingColor'} />
                    </span>
                    <span>
                      <StarIcon className={star >= 5?'withratingColor': 'withoutRatingColor'} />
                    </span>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SimilarProduct;
