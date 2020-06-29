import React,{useState} from 'react';

import {CssBaseline, 
    TextField,
    FormControlLabel,
    Checkbox,
    Link,Paper,Grid,Box, Avatar, Button, Typography} from '@material-ui/core';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import { Alert , Row, Col, Card } from 'reactstrap';
import {withRouter} from 'react-router-dom'

import {signIn} from '../../services/Apiservices'

import './log.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://bit.ly/3dLFu0J)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignUpSide(props) {

  const classes = useStyles();
    
  
    const [ResforLog, setResforLog] = useState({})
    const [ErrMsg, setErrMsg] = useState('')
    const [visible, setvisible] = useState(false)
    const [Email, setEmail] = useState({email:''})
    const [Password, setPassword] = useState({password:''})
  const changehandlerEmail = (e) =>{
    if(e.target.value === ''){
      setEmail({email:''})
    }
    else{
      setvisible(false)
      setEmail({email:e.target.value})
    }
  }
  const changehandlerPswd = (e) =>{
    if(e.target.value === ''){
      setPassword({password:''})
    }
    else{
      setvisible(false)
      setPassword({password:e.target.value})
    }
   

    console.log(Password);
    
  }
  const submitHandler  = async (e) =>{

    await e.preventDefault()
    if(Email.email === ''){
     await setErrMsg('please Enter Email Id')
     await setvisible(true)
    }

    else if(Password.password === ''){
      await setErrMsg('please Enter Password')
      await setvisible(true)
    }
    else{
      try {
        let result = await signIn(Email.email, Password.password)
        if(result.success === true){
         await console.log(result.token);
          
         await localStorage.setItem('toKen', result.token)
          await props.history.push('/home')
        }
      } catch (e) {
       await setErrMsg(e.message)
       await setvisible(true)
      }
    }
  
  
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
  <h3 className={'err-msg'}>{ResforLog.message}</h3>
          <form className={classes.form} onSubmit={submitHandler} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name={"email"}
              autoComplete="email"
              type={'text'}
              autoFocus
              onChange={changehandlerEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name={"password"}
              label="Password"
              type="password"
              id="password"
             
              onChange={changehandlerPswd}
            />
            {ErrMsg === false ? <Row>
                <Col lg="12" md ='12'>
                    <Card className={'alt-alert-cont'}>

                    </Card>

                </Col>
            </Row> : <Row >
                            <Col lg="12" md ='12'>
                                <Alert isOpen={visible} color="danger">{ErrMsg}</Alert>  <div></div>
                            </Col>
                        </Row>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
        
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignUpSide)