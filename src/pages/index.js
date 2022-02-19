import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hello from "../components/hello"
import Offer from "../components/offer"
import Form from "../components/form"
import Testimonials from "../components/testimonials.js"


const IndexPage = () => (
  <body>
  <Layout>
    <Seo title="Home" />
    <Hello />
    <Offer />
    <Testimonials />
    
    <Form />
    
  </Layout>
  </body>
)

export default IndexPage
