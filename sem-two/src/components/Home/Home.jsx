import React from 'react'
import Nav from '../navBar/Nav'
import Slick from '../slider/Slider'
import Banners from '../Banners/Banners'
import Gallery from '../grid-home/Grid'
import Footer from '../footer/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Home = props => {
    return (
        <div>
            <Nav />
            <Router>
      <Switch>
        <Route path="/home" exact children={<div className={'slick-cont'} ><Slick />
                                                                            <Banners/>
                                                                            <Gallery/>
                                                                            <Footer/>
                                                                            </div> } />

        
     </Switch>
     </Router>
        </div>
    )
}



export default Home

