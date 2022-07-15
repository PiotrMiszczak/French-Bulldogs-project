import * as React from "react"

function feedbackSpinner({ visible }) {
  return (
    <div class={visible ? "feedback__spinner" : "hidden"}>
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
