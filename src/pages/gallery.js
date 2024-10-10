import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import Gallery from "react-photo-gallery";
//import Carousel, { Modal, ModalGateway } from "react-images";
import ImageGallery from "react-image-gallery";
import testimonials from "../assets/testimonials.jpg"
import testimonials2 from "../assets/testimonials2.jpg"


function GalleryPage(){
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
  const [currentImage, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const openLightbox = React.useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    
   
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (

  <Layout>
    <Seo title="Gallery" />
    <section className="gallery">
    <h2 className="gallery_header">Our gallery</h2>
    
    <ImageGallery items={photos}/>
    
    
</section>
    
  </Layout>
  
)}

export default GalleryPage
