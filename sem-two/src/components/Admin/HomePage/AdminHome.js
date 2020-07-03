import React, { useState, useEffect } from 'react'
import Header from '../Header/header'
import { getUserData } from '../../../service/ApiService';
import { Typography, Button } from "@material-ui/core";
import { Row, Col } from 'reactstrap'
import { toast } from "react-toastify";
const AdminHome = () => {
    const [user, setUser] = useState({ admin: '' })

    toast.configure();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true
    }
    const moveOn = () => {
        window.location = '/admin/login'
      }
    useEffect(() => {
        const getUser = async () => {
            let result;
            result = await getUserData()
            if (result.success) {
                setUser({ admin: result.user.admin })
                console.log(result);
            }
            else {
                toast.error(result.error, toastOptions);
                if (result.error.includes("Unauthorized")) {
                    window.history.push('/admin/login');
                }
                return console.log(result.error);
            }
        }
        getUser()
    }, [])

    return (
        <div>
            {(user.admin == true) ? (<Header />) : (<div className={'container'} style={{ marginTop: '250px' }}>
                <Row>
                    <Col lg={2} sm={12} md={10}>
                    </Col>
                    <Col lg={8} sm={12} md={10}>
                        <Typography variant='h3'>This is page only for Admin</Typography>
                    </Col>
                    <Col lg={2} sm={12} md={10}>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col lg={4} sm={12} md={10}>
                    </Col>
                    <Col lg={4} sm={12} md={10}>
                        <Button variant="contained" color="primary" onClick={moveOn} disableElevation>
                             Go Back to Login
                        </Button>
                    </Col>
                    <Col lg={3} sm={12} md={10}>
                    </Col>
                </Row>
            </div>)}
        </div>
    )
}

export default AdminHome
