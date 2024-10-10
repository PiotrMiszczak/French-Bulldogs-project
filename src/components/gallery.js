import * as React from "react"
import ImageGallery from "react-image-gallery";
import testimonials from "../assets/testimonials.jpg"
import testimonials2 from "../assets/testimonials2.jpg"

function gallery(){

    const photos = [
        {
         original:testimonials,
         thumbnail:testimonials,
         thumbnailWidth:"50px"
    
         
          
        },
        {
          original:testimonials2,
         thumbnail:testimonials2,
         thumbnailWidth:"50px"
        }
    ]

    return(
     
     <section className="gallery">
     <h2 className="gallery_header">Gallery</h2>
        <ImageGallery items={photos}/>
        
        
    </section>
    )
}

export default gallery