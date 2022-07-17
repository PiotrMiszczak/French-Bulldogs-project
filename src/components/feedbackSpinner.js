import * as React from "react"

function feedbackSpinner({ visible }) {
  return (
    <div className={visible ? "feedback__spinner" : "hidden"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default feedbackSpinner
