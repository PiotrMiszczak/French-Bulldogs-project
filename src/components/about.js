import * as React from "react"
import { Link } from "gatsby"
import peace from "../assets/peace.svg"
import health from "../assets/health.svg"
import travel from "../assets/travel.svg"
import support from "../assets/support.svg"
import { useIntl } from "gatsby-plugin-intl"


function About(){
  const intl = useIntl()
  return(
<section className="about">
  <h2 className="section__header">{intl.formatMessage({ id: "aboutHeader" })}</h2>
<p>{intl.formatMessage({ id: "helloContent" })}</p>

<Link to="dogs"><button className="hello__content-button">{intl.formatMessage({ id: "getPuppyButton" })}</button></Link>
   
  </section>
  )
}
  


export default About
