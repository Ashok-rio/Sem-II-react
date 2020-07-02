import React, { Fragment } from "react";
import Header from "../Header/Header";
import Slick from '../slider/Slider';
import Banner from '../Banners/Banners';
import Gallery from '../grid-home/Grid';
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slick />
      <Banner />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default Home;
