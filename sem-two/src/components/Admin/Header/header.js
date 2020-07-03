import React, { useState, useEffect } from "react";
import {
    AppBar,
    Avatar,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import "./header.css";
import { getUserData } from "../../../service/ApiService";
import { toast } from "react-toastify";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Product from './Product/Product'
import CreatePro from './Product/CreateProduct'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#0063B1",
    },
    button: {
        color: "white",
        marginRight: "2%",
    },
    buttonMyOrder: {
        color: "white",
        marginRight: "2%",
    },
    title: {
        flex: 1,
        textAlign: "left",
    },
    navImg: {
        marginRight: "2%",
    },

    search: {
        position: "relative",
        marginRight: "5%",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    avatar: {
        marginRight: '20px'
    },
    username: {
        marginRight: '250px'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: '#8EBAD2',
        width: drawerWidth,
        height: '900px',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    btn: {
        color: 'White'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Nav = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState({ admin: '' })
    const [addPro, setAddpro] = useState(false)
    const [getPro, setGetPro] = useState(true)

    toast.configure();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true
    }
    useEffect(() => {
        const getUser = async () => {
            let result;
            result = await getUserData()
            if (result.success) {
                setUser(result.user)
                toast.success(result.message, toastOptions);
            }
            else {
                toast.error(result.error, toastOptions);
                if (result.error.includes("Unauthorized")) {
                    window.history.push('/admin/login');
                }
                return console.log(result.error);
            }
        }
        getUser(1)
    }, [toastOptions])
    
    var name = String(user.name)

    const logout = () => {
        localStorage.removeItem('usertoken');
        moveOn();
    }
    const moveOn = () => {
        window.location = '/admin/login'
    }

    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            Thanjore Craft
                    </Typography>
                        <Toolbar className={classes.username}>
                            {" "}
                            <Button className={classes.button}>
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {name.charAt(0)}
                                </Avatar>
                                {user.name}
                            </Button>
                        </Toolbar>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <br />
                            <ListItem button style={{ marginTop: '70px' }}>
                                <ListItemIcon> <HomeIcon /></ListItemIcon>
                                <ListItemText onClick={async () => { await setAddpro(false); await setGetPro(true) }} ><Typography variant="h6" className={(getPro === true ? (classes.btn) : null)}>Home</Typography></ListItemText>
                            </ListItem>
                            <ListItem button style={{ marginTop: '20px' }}>
                                <ListItemIcon> <AddCircleOutlineIcon /></ListItemIcon>
                                <ListItemText onClick={async () => { await setGetPro(false); await setAddpro(true) }} ><Typography variant="h6" className={(addPro === true ? (classes.btn) : null)} >Add Product</Typography></ListItemText>
                            </ListItem>
                            <ListItem button style={{ marginTop: '20px' }}>
                                <ListItemIcon> <ExitToAppIcon /></ListItemIcon>
                                <ListItemText onClick={logout} ><Typography variant="h6" >Logout</Typography></ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main className={classes.content} style={(addPro===true)?{backgroundColor:'rgb(241, 123, 217)',height:'900px'}:{backgroundColor:'white'}}>
                    <Toolbar />
                    {((getPro===true)?(<Product/>):((addPro===true)?(<CreatePro/>):(null)))}
                </main>
            </div>
        </div>
    );
};

export default Nav;
