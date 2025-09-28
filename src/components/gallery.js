import * as React from "react"
import ImageGallery from "react-image-gallery";
import gallery1 from "../assets/gallery1.jpg"
import gallery2 from "../assets/gallery2.jpg"
import gallery3 from "../assets/gallery3.jpg"
import gallery4 from "../assets/gallery4.jpg"
import gallery5 from "../assets/gallery5.jpg"
import gallery6 from "../assets/gallery6.jpg"
import gallery7 from "../assets/gallery7.jpg"
import gallery8 from "../assets/gallery8.jpg"
import gallery9 from "../assets/gallery9.jpg"


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
        },
    ]

    return(
     
     <section className="gallery">
     <h2 className="gallery_header">Gallery</h2>
        <ImageGallery items={photos}/>
        
        
    </section>
    )
}

export default gallery