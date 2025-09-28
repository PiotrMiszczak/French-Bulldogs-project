import * as React from "react";
import { Link } from "gatsby";

import Slider from "react-slick";
import {StaticImage} from "gatsby-plugin-image"
import { useIntl} from "gatsby-plugin-intl"

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
    const intl = useIntl()
    
  
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
   <h2 className="hello__content-heading">{intl.formatMessage({ id: "defaultTitle" })}</h2>
   <p className="hello__content-text">{intl.formatMessage({ id: "helloContent" })}</p>
   
   <Link to="dogs"><button className="hello__content-button">{intl.formatMessage({ id: "getPuppyButton" })}</button></Link>
 </div>


</div>
    )
}

export default SliderComponent
