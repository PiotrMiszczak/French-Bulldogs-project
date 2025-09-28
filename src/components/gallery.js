import React from "react"
import ImageGallery from "react-image-gallery"
import gallery1 from "../images/gallery1.jpg"
import gallery2 from "../images/gallery2.jpg"
import gallery3 from "../images/gallery3.jpg"
import gallery4 from "../images/gallery4.jpg"
import gallery5 from "../images/gallery5.jpeg"
import gallery6 from "../images/gallery6.jpg"
import gallery7 from "../images/gallery7.jpg"
import gallery8 from "../images/gallery8.jpg"
import gallery9 from "../images/gallery9.jpg"


function gallery(){

    const photos = [
        {
         original:gallery1,
         thumbnail:gallery1,
         thumbnailWidth:"50px"
        },
          {
         original:gallery2,
         thumbnail:gallery2,
         thumbnailWidth:"50px"
        },
          {
         original:gallery3,
         thumbnail:gallery3,
         thumbnailWidth:"50px"
        },
          {
         original:gallery4,
         thumbnail:gallery4,
         thumbnailWidth:"50px"
        },
          {
         original:gallery5,
         thumbnail:gallery5,
         thumbnailWidth:"50px"
        },
          {
         original:gallery6,
         thumbnail:gallery6,
         thumbnailWidth:"50px"
        },
          {
         original:gallery7,
         thumbnail:gallery7,
         thumbnailWidth:"50px"
        },
          {
         original:gallery8,
         thumbnail:gallery8,
         thumbnailWidth:"50px"
        },
          {
         original:gallery9,
         thumbnail:gallery9,
         thumbnailWidth:"50px"
        }
    ]

    return(
     
     <section className="gallery">
   
        <ImageGallery items={photos}/>
        
        
    </section>
    )
}

export default gallery