import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import testimonials from "../assets/testimonials.jpg"
import testimonials2 from "../assets/testimonials2.jpg"

function GalleryPage(){
  const photos = [
    {
      src: testimonials,
      width: 3,
      height: 2,
      
    },
    {
      src: testimonials2,
      width: 3,
      height: 2
    },
    {
      src: testimonials,
      width: 3,
      height: 2
    },
    {
      src: testimonials2,
      width: 3,
      height: 2
    },
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
  <body>
  <Layout>
    <Seo title="Gallery" />
    <section className="gallery">
    
      <Gallery photos={photos} onClick={openLightbox}  margin={6} targetRowHeight={360}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    
    
</section>
    
  </Layout>
  </body>
)}

export default GalleryPage
