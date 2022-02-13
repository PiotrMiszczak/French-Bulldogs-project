import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import {GatsbyImage, getImage} from "gatsby-plugin-image"

function SliderComponent(){
    const images = useStaticQuery(graphql`
    query getImages {
        image1: file(relativePath: { eq: "dog1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
                quality: 100
                layout: FULL_WIDTH
                
              )
          }
        }
        image2: file(relativePath: { eq: "dog2.jpg" }) {
          childImageSharp {
            gatsbyImageData(
                quality: 100
                layout: FULL_WIDTH
                
              )
          }
        }
        image3: file(relativePath: { eq: "dog3.jpg" }) {
            childImageSharp {
              gatsbyImageData(
                  quality: 100
                  layout: FULL_WIDTH
                  
                )
            }
          }
      }
    `)
    const settings = {
        dots: true,
        adaptiveHeight:true,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:4000,
        slidesToScroll: 1,
        
      };
      const image1 = getImage(images.image1)
      const image2 = getImage(images.image2)
      const image3 = getImage(images.image3)
  
    return(
        <>
        <Slider className="hello__slider" {...settings}>
          <div>
            <GatsbyImage image={image1}/>
          </div>
          <div>
          <GatsbyImage image={image2}/>
          </div>
          <div>
          <GatsbyImage image={image3}/>
          </div>
 </Slider>
        </>
    )
}

export default SliderComponent
