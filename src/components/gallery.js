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
import galleryThumb1 from "../images/gallery1_thumb.jpg"
import galleryThumb2 from "../images/gallery2_thumb.jpg"
import galleryThumb3 from "../images/gallery3_thumb.jpg"
import galleryThumb4 from "../images/gallery4_thumb.jpg"
import galleryThumb5 from "../images/gallery5_thumb.jpeg"
import galleryThumb6 from "../images/gallery6_thumb.jpg"
import galleryThumb7 from "../images/gallery7_thumb.jpg"
import galleryThumb8 from "../images/gallery8_thumb.jpg"
import galleryThumb9 from "../images/gallery9_thumb.jpg"

function gallery(){

    const photos = [
        {
         original:gallery1,
         thumbnail:galleryThumb1,
         thumbnailWidth:"50px",
         loading:"lazy",
         originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery2,
         thumbnail:galleryThumb2,
         thumbnailWidth:"50px",
          loading:"lazy",
         originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery3,
         thumbnail:galleryThumb3,
         thumbnailWidth:"50px",
          loading:"lazy",
         originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery4,
         thumbnail:galleryThumb4,
         thumbnailWidth:"50px",
          loading:"lazy",
          originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery5,
         thumbnail:galleryThumb5,
         thumbnailWidth:"50px",
          loading:"lazy",
          originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery6,
         thumbnail:galleryThumb6,
         thumbnailWidth:"50px",
          loading:"lazy",
          originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery7,
         thumbnail:galleryThumb7,
         thumbnailWidth:"50px",
          loading:"lazy",
          originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery8,
         thumbnail:galleryThumb8,
         thumbnailWidth:"50px",
          loading:"lazy",
          originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        },
          {
         original:gallery9,
         thumbnail:galleryThumb9,
         thumbnailWidth:"50px",
          loading:"lazy",
          originalAlt:"French bulldog",
         thumbnailAlt:"French bulldog"
        }
    ]

    return(
     
     <section className="gallery">
   
        <ImageGallery items={photos}/>
        
        
    </section>
    )
}

export default gallery