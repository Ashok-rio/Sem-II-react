import React, { useState, useEffect } from "react";
import { Container, CardBody, Card, CardFooter } from "reactstrap";
import { Grid ,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductImage from "./ProductImage";
import { getAllProduct } from "../../../../service/ApiService";
import "./product.css";
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
const ProductAll = () => {
    const classes = useStyles();
    const [product, setProduct] = useState();
    useEffect(() => {
        async function fetchData() {
            try {
                var result = await getAllProduct();
                if (result.success === true) {
                    setProduct(result.products);
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchData();
    }, []);

    const renderProduct = () => {
        return product.map((data, i) => {
            return (
                <React.Fragment>
                    <Grid item lg={3}>
                            <Card className={"productCardBox"} key={i}>
                                <CardBody style={{ textAlign: "center" }}>
                                    <ProductImage
                                        src={data.url}
                                        className={"similarProductImages"}
                                    />
                                </CardBody>
                                <br />
                                <CardBody>
                                    <div className={"similarProductText"}>
                                    </div>
                                </CardBody>
                                <CardFooter style={{ backgroundColor: '#18A4E0',fontWeight:600,textAlign:'center',fontSize:'18px'}}>
                                    {data.name}
                                </CardFooter>
                            </Card>
                    </Grid>
                </React.Fragment>
            );
        });
    };
    return (
        <React.Fragment>
            <Container fluid={true} style={{ padding: "6%" }}>
                <Typography variant="h4" style={{fontWeight:'500'}}>Product Detail</Typography>
                <Grid container spacing={4} className={classes.root}>
                    {product ? (
                        renderProduct()
                    ) : (
                            <p style={{ textAlign: "center" }}>***No Product found***</p>
                        )}
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default ProductAll;