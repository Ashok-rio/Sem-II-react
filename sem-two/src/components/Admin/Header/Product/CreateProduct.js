import React, { useState } from "react";
import { Container} from "reactstrap";
import { Grid, Typography, Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { createProduct } from '../../../../service/ApiService'
import { toast } from "react-toastify";
import './product.css'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "20px",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    paper: {
        padding: theme.spacing(5),
        // textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

const CreateProduct = () => {
    const [product, setProduct] = useState({ name: '', url: '', color: '', size: '', price: '', quantity: '' })
    const classes = useStyles();
    const [message, setMessage] = useState('');
    console.log(product);
    
    toast.configure();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true
    }
    const submit = async () => {
        if (product.name < 5) {
            return setMessage('Product Name must have more then 5 characters')
        }
        if (product.url !== '' || product.color !== '' || product.size !== ''|| product.price !== ''|| product.quantity !== '') {
            await setMessage('')
            await createproduct()
        }
        else {
            return setMessage('Please enter required field')
        }
    }
    const createproduct = async () => {
        let result;
        result = await createProduct(product)
        if (result.success === true) {
            await setProduct(result.product)
            await toast.success(result.message, toastOptions);
             window.location='/admin/home'
        }
        else {
            toast.error(result.error, toastOptions);
            if (result.error.includes("Unauthorized")) {
                window.history.push('/admin/login');
            }
            return console.log(result.error);
        }
    }

    return (
        <React.Fragment>
            <Container fluid={true} style={{ padding: "6%" }}>
                <Typography variant="h4" style={{ fontWeight: '500' }}>Add Product</Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={4} className={classes.root}>
                        <Grid item lg={6}>
                            <TextField
                                id="name"
                                label="Name"
                                name="name"
                                type="text"
                                value={product.name}
                                variant="outlined"
                                onChange={(e)=> setProduct({...product,[e.target.name]: e.target.value })}
                                required={true}
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <TextField
                                id="size"
                                name="size"
                                label="Size"
                                type="text"
                                value={product.size}
                                onChange={(e)=> setProduct({...product,[e.target.name]: e.target.value })}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} className={classes.root}>
                        <Grid item lg={6}>
                            <TextField
                                id="color"
                                name="color"
                                label="Color"
                                type="text"
                                value={product.color}
                                onChange={(e)=> setProduct({...product,[e.target.name]: e.target.value })}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <TextField
                                id="price"
                                name="price"
                                label="Price"
                                type="Number"
                                value={product.price}
                                onChange={(e)=> setProduct({...product,[e.target.name]: e.target.value })}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} className={classes.root}>
                        <Grid item lg={6}>
                            <TextField
                                id="quantity"
                                name="quantity"
                                label="Quantity"
                                type="Number"
                                onChange={(e)=> setProduct({...product,[e.target.name]: e.target.value })}
                                value={product.quantity}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <TextField
                                id="url"
                                name="url"
                                label="Image Url"
                                type="text"
                                value={product.url}
                                onChange={(e)=> setProduct({...product,[e.target.name]: e.target.value })}
                                variant="outlined"
                                required={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} className={classes.root}>
                        <Grid item lg={12}>
                            <Button onClick={submit} variant="contained" style={{ width: '84%', marginTop: '25px', height: '50px', backgroundColor: '#0b9fe9de' }} disableElevation>
                                Disable elevation
                        </Button>
                        </Grid>

                        {message ? <h5 style={{ marginLeft: '50px', color: 'red' }}>{message}</h5> : null}
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default CreateProduct
