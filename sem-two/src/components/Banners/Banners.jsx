import React from 'react'
import B1 from '../../img/b1.png'
import B2 from '../../img/b2.png'
import './banners.css'
function Banners(props) {
    return (
        <div>
            <img src={B1} className={'banner'}/>
            <img src={B2} className={'banner'} />
        </div>
    )
}



export default Banners

