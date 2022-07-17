import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hello from "../components/hello"
import Offer from "../components/offer"
import Form from "../components/form"

function IndexPage() {
  let textAreaValue = false
  const isBrowser = () => typeof window !== "undefined"

  if (isBrowser() && window.history.state && window.history.state.message) {
    textAreaValue = window.history.state.message
  }

  return (
    <Layout>
      <Seo />
      <Hello />
      <Offer />
      <Form text={textAreaValue} />
    </Layout>
  )
}

export default IndexPage
