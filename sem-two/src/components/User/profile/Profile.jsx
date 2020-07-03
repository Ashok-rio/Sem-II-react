import React,{useState, useEffect} from 'react'
import {getUser} from '../../../service/ApiService'
import { toast } from "react-toastify";
import Header from '../../Header/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Row, Col} from 'reactstrap'
import userIcon from '../../../img/avatar.png'
import '../user.css'
const useStyles = makeStyles((theme) => ({
  
    profileContOut : {
       padding: 5
      },
    profileContIn:{
        background: 'rgba(196, 196, 196, 0.5)',
        width:500,
        height:500,
        marginTop:100
    },
    name:{
        width:'100%',
        textAlign:'center'
    }
  }));
  
  
toast.configure();

const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar : true
  }

function Profile(props) {
    const classes = useStyles();
    const [Message, setMessage] = useState('')
    const [User, setUser] = useState({})

    useEffect(() => {
       const fetchUser = async ()=>{
     
           try{
            let user = await getUser();
            if (user.success === true) {
                console.log("success", user)
                toast.success(user.message, toastOptions);
                setUser(user.user)
                
            }
           }
           catch (e){
            setMessage(e.message);
            toast.error(e.message, toastOptions);
           }
            
            
              
            
        }
        fetchUser();
    }, [])
    return (
       <div>
           <Header/>

      <Container maxWidth="sm" className={classes.profileContOut} >
        <Container className={classes.profileContIn}>
            <Row className={'row-profile'}>
                <img src={userIcon}/>
            </Row>
            <Row  className={'row-profile-name'}>
            <Typography variant={'h4'} className={classes.name}>
                {User.name}
            </Typography>
            </Row>
            <Row>
            <Typography variant={'h5'} className={'row-profile-name'}>
                {User.email}
            </Typography>
            </Row>
            <Row>
            <Typography variant={'h5'} className={'row-profile-name'}>
                {User.phone}
            </Typography>
            </Row>
        </Container>
      </Container>

       </div>
    )
}


export default Profile

