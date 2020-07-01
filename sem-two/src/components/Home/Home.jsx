import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./home.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Application
          </Typography>
          {window.location.pathname === "/" ? (
            <React.Fragment>
              <Button
                color="inherit"
                style={{
                  border: "1px solid white",
                  width: "100px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  window.location.pathname = "/register";
                }}
              >
                Register
              </Button>
              <Button
                color="inherit"
                style={{ border: "1px solid white", width: "100px" }}
                onClick={() => {
                  window.location = "/login";
                }}
              >
                Login
              </Button>
            </React.Fragment>
          ) : (
            <Button
              color="inherit"
              style={{ border: "1px solid white", width: "100px" }}
              onClick={() => {
                window.location = props.link;
              }}
            >
              {props.buttonName}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
