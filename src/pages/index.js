import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hello from "../components/hello"
import Offer from "../components/offer"
import Form from "../components/form"



function IndexPage(){ 
  let textAreaValue=false;
  
  if(window.history.state && window.history.state.message){
    textAreaValue=window.history.state.message}
    
  return(
  <body>
  <Layout>
    <Seo title="Home" />
    <Hello />
    <Offer />
    
    
    <Form text={textAreaValue} />
    
  </Layout>
  </body>
)
}

export default IndexPage
