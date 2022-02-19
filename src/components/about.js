import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import {GatsbyImage, getImage} from "gatsby-plugin-image"

function About() {

    const images = useStaticQuery(graphql`
    query getImages {
        image1: file(relativePath: { eq: "dog1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
                quality: 100
                layout: FULL_WIDTH
                
              )
          }
        }}`)
        const image1 = getImage(images.image1)
  return (
    <section className="about">
        <h2>About us</h2>
        <img> </img>

        
    </section>
  )
}

export default About
