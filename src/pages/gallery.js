import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Gallery } from "gatsby-theme-gallery";

const GalleryPage = () => (
  <body>
  <Layout>
    <Seo title="Gallery" />
    <section className="gallery">
    <Gallery />
    </section>

    
  </Layout>
  </body>
)

export default GalleryPage
