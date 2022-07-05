import React, { useState } from "react"
import { Link } from "gatsby"
import french from "../assets/french.svg"
import axios from "axios"
import qs from 'qs'

function Form({ text }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [timeFrame, setTimeFrame] = useState("asap")
  const [other, setOther] = useState("")

  const postRequest = async (message) => {
    console.log(message)

    try {
      console.log("próbuje")
      const resp = await axios.post(
        "https://majestic-dry-tortugas-10325.herokuapp.com/",message
        
        
      )
      console.log(resp)
    } catch (err) {
      console.log(err)
    }
  }

  const sendMail = e => {
    console.log("klikam")
    e.preventDefault()
    const mail = qs.stringify({
      name,
      email,
      timeFrame,
      other
    })
    postRequest(mail)
  }

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
            defaultValue={text ? text : ""}
            className="form__input form__input-textarea"
            name="other"
            id="other"
            value={other}
            onChange={event => setOther(event.target.value)}
          />
          <button className="form__button" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
