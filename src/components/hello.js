import * as React from "react";
import { Link } from "gatsby";

import Slider from "react-slick";
import {StaticImage} from "gatsby-plugin-image"


function SliderComponent(){
    
    const settings = {
        dots: true,
        adaptiveHeight:false,
        fade: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        initialSlide:0,
        autoplaySpeed:4000,
        slidesToScroll: 1,
        
      };
      
  
    return(
        <div className="hello">
        <Slider className="hello__slider" {...settings}>
          <div>
            <StaticImage className="hello__image" src="../images/dog22.jpg" alt="french bulldog" />
          </div>
          <div>
          <StaticImage  className="hello__image" src="../images/dog1.jpg" alt="french bulldog" />
          </div>
         
 </Slider>
 <div className="hello__mask">
 </div>
 <div className="hello__content">
   <h2 className="hello__content-heading">French Bulldogs</h2>
   <p className="hello__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
   
   <Link to="#form"><button className="hello__content-button">GET PUPPY !</button></Link>
 </div>


</div>
    )
}

export default SliderComponent
