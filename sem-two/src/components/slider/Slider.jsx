import React,{useState, useEffect} from 'react';
import Slider from "react-slick";
// import Images from './Imgs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getSlickImgs} from '../../services/Apiservices'
import './slide.css'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const Sliders = props =>{

    const [Imgs, setImgs] = useState([])
    useEffect( () => {
        async function fetchData() {
        try{
            let result = await getSlickImgs()
            console.log(result);
            if(result.success === true){
               setImgs(result.img)
              }
            
        }
       catch (e){
            console.log(e.message);
            
       }}
       fetchData();
    }, [])

    const images = () =>{
        return Imgs.map(data =>(
            <div key={data._id}>  
                 <img  src={data.url} className={'Slick-img'}/>
                </div>
        ))
    }
  
    return(
        <div className={'slick-cont'}>
            <Slider {...settings}>
           
           { images()}
        
        </Slider>
        </div>
        
    )
}

export default Sliders