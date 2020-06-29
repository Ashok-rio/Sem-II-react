import React,{useState} from 'react';
import {signUp} from '../../services/Apiservices'
import {CssBaseline, 
    TextField,
    FormControlLabel,
    Checkbox,
    Link,Paper,Grid,Box, Avatar, Button, Typography} from '@material-ui/core';

import { Alert , Row, Col, } from 'reactstrap';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'
import './reg.css'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://wallpapercave.com/wp/wp3958446.jpg)',
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

 function SignInSide(props) {
  const classes = useStyles();
    
    const [Form, setForm] = useState({})
    const [Email, setEmail] = useState({email:''})
    const [visible, setvisible] = useState(false)
    const [Password, setPassword] = useState({password:''})
    const [Phone, setPhone] = useState({phone: ''})
    const [Name, setName] = useState({name: ''})
    const [ErrMsg, setErrMsg] = useState('')

    const changehandlerEmail = (e) =>{
        if (e.target.value == '') {
            setEmail({ email: '' })
        }
        else{
            setvisible(false)
            setEmail({email:e.target.value})
            
        }
       
        
      }
      const changehandlerPswd = (e) =>{
        if (e.target.value == '') {
            setPassword({password: ''})

        }
        else{
            setvisible(false)
        setPassword({password:e.target.value})
    
       
        }
        
        
      }

      const changehandlerPhone = e =>{
        if (e.target.value == '') {
            setPhone({phone: ''})

        }
        else{
            setvisible(false)
            setPhone({phone:e.target.value})
        
  
        }
       
      }
      const changehandlerName = e =>{
        if (e.target.value == '') {
            setName({name: ''})

        }
        else{
            setvisible(false)
            setName({name:e.target.value})
    
        }
     
      }

  const submitHandler  = async (e) =>{
      await  e.preventDefault()
  
    if(Email.email === ''){
        setErrMsg('please Enter Email')
        setvisible(true)
    }
    else if(Name.name === ''){
        setErrMsg('please Enter Name')
        setvisible(true)
    }
    else if(Phone.phone === ''){
        setErrMsg('please Enter Phone number')
        setvisible(true)
    }
    else if(Password.password === ''){
        setErrMsg('please Enter Password')
        setvisible(true)
    }
    else{
       
       try {
        let result = await signUp(Name.name, Email.email, Phone.phone, Password.password)
          console.log(result);
          if(result.success === true){
            await props.history.push('/login')
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
            <PersonAddIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

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
              id="name"
              label="Name"
              name={"name"}
            //   autoComplete="email"
              type={'text'}
              autoFocus
              onChange={changehandlerName}
            />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="phone"
              name={"phone"}
            //   autoComplete="email"
              type={'text'}
              autoFocus
              onChange={changehandlerPhone}
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
             <Row >
                            <Col lg="12" md='12'>
                                <Alert isOpen={visible} className={'alert-msg-reg'} color="danger">{ErrMsg}</Alert>
                            </Col>
                        </Row>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
        
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignInSide)