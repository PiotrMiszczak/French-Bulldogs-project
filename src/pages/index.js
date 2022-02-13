import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SliderComponent from "../components/slider"

const IndexPage = () => (
  <body>
  <Layout>
    <Seo title="Home" />
    <SliderComponent />
  </Layout>
  </body>
)

export default IndexPage
