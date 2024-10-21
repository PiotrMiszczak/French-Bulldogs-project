import FeedbackSpinner from "./feedbackSpinner"
import React, { useState, useLayoutEffect, useRef } from "react"
import french from "../assets/french.svg"
import axios from "axios"
import qs from "qs"



function Form({ text }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [timeFrame, setTimeFrame] = useState("asap")
  const [feedback, setFeedback] = useState("")
  const [inProgress, setInProgress] = useState(false)
  const feedbackRef = useRef()
  const textareaRef = useRef()
 

  //////////////////////API COMMUNICATION ////////////////////////////
  const postRequest = async (message,username,password) => {
    try {
      setInProgress(true)
      
      const authString = username+":"+password
      const authBase64 = btoa(authString);

      const resp = await axios.post(
        process.env.GATSBY_MAILSERVER_ENDPOINT,
        message,{headers:{Authorization:"Basic "+authBase64}}
      )
      resp.status == 200 ? setFeedback("success") : setFeedback("error")
      setInProgress(false)
    } catch (err) {
      setFeedback("error")
      setInProgress(false)
    }
  }

  const sendMail = e => {
    e.preventDefault()
    const mail = qs.stringify({
      name,
      email,
      timeFrame,
      other: textareaRef.value
    })
    postRequest(mail,process.env.GATSBY_MAILSERVER_USER,process.env.GATSBY_MAILSERVER_PASSWORD)
  }
  //////////////////////FEEDBACK ANIMATION////////////////////////////
  useLayoutEffect(() => {
    if (feedback !== "") {
      setTimeout(() => {
        feedbackRef.current.classList.add("form__feedback-onExit")
      }, 2500)

      setTimeout(() => {
        feedbackRef.current.classList.remove(
          "form__feedback-good",
          "form__feedback-bad",
          "form__feedback-onExit"
        )
        feedbackRef.current.classList.add("hidden")
        setFeedback("")
      }, 4000)
    }
  }, [feedback])

  return (
    <section className="form__container">
      <div className="form__wrapper">
        <form id="form" className="form" onSubmit={sendMail}>
          <img className="form__icon" src={french} alt="french bulldog icon" />
          <legend className="form__legend">Join our waitlist!</legend>
          <label className="form__label" htmlFor="name">
            Your name:
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
          <label className="form__label" htmlFor="email">
            Email:
          </label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
          <label className="form__label" htmlFor="timeFrame">
            When are you looking to Adopt?
          </label>
          <select
            className="form__input"
            name="timeFrame"
            id="timeFrame"
            value={timeFrame}
            onChange={event => setTimeFrame(event.target.value)}
            required
          >
            <option value="asap">As soon as possible</option>
            <option value="1-6 months">1-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="year+">year+</option>
          </select>
          <label className="form__label" htmlFor="other">
            Any other information you want to share:
          </label>
          <textarea
          ref={textareaRef}
            defaultValue={text ? text : ""}
            className="form__input form__input-textarea"
            name="other"
            id="other"
            
          />

          <button className="form__button" type="submit">
            Send
          </button>
          <span
            ref={feedbackRef}
            className={
              feedback == ""
                ? "form__feedback hidden"
                : feedback == "success"
                ? "form__feedback form__feedback-good"
                : "form__feedback form__feedback-bad"
            }
          >
            {feedback == "success"
              ? "Your message has been sent succesfully ;)"
              : "Oops, something went wrong. Contact us on social media"}
          </span>
          <FeedbackSpinner visible={inProgress} />
        </form>
      </div>
    </section>
  )
}

export default Form
