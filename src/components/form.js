import * as React from "react"
import { Link } from "gatsby"
import french from "../assets/french.svg"

function Form({text}) {
  
    

  return (
    <section className="form__container">
        <div className="form__wrapper">
      <form id="form"  className="form">
        
        <img className="form__icon" src={french} alt="french bulldog icon" />
        <legend className="form__legend">Join our waitlist!</legend>
        <label className="form__label" htmlFor="name">
          Your name:
        </label>
        <input className="form__input" type="text" name="name" id="name" />
        <label className="form__label" htmlFor="email">
          Email:
        </label>
        <input className="form__input" type="email" name="email" id="email" />
        <label className="form__label" htmlFor="timeFrame">
          When are you looking to Adopt?
        </label>
        <select className="form__input" name="timeFrame" id="timeFrame">
          <option value="asap">As soon as possible</option>
          <option value="1-6 months">1-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="year+">year+</option>
        </select>
        <label className="form__label" htmlFor="other">
          Any other information you want to share:
        </label>
       <textarea  defaultValue={text ? text : ''} className="form__input form__input-textarea" name="other" id="other"/>
       <button className="form__button" type="submit">Send</button>
      </form>
      </div>
    </section>
  )
}

export default Form
