/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.scss"
import "../css/normalize.css"
import "../css/animation.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Header from "./header"
import Footer from "./footer.js"
import { useIntl} from "gatsby-plugin-intl"


function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
const intl = useIntl();
const defaultTitle=intl.formatMessage({ id: "defaultTitle" })

  

  return (
    <>
      <Header siteTitle={defaultTitle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
