import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hello from "../components/hello"
import Offer from "../components/offer"
import Form from "../components/form"



const IndexPage = () => (
  <body>
  <Layout>
    <Seo title="Home" />
    <Hello />
    <Offer />
    
    
    <Form />
    
  </Layout>
  </body>
)

export default IndexPage
