import * as React from "react"
import { Link } from "gatsby"
import peace from "../assets/peace.svg"
import health from "../assets/health.svg"
import travel from "../assets/travel.svg"
import support from "../assets/support.svg"

const Offer = () => (
  <section className="offer">
      <article className="offer__item">
          <div className="offer__content"></div>
          
          <h3 className="offer__heading"><span>PEACE</span> OF MIND</h3>
          <img className="offer__icon" src={peace}/>
          <p className="offer__text">We guarantee all of our puppies arrive in good health with a contract to protect the buyer.</p>
      </article>
      <article className="offer__item">
          <div className="offer__content"></div>
          
          <h3 className="offer__heading"><span>GOOD</span> HEALTH</h3>
          <img className="offer__icon" src={health}/>
          <p className="offer__text">We guarantee all of our puppies arrive in good health with a contract to protect the buyer.</p>
      </article>
      <article className="offer__item">
          <div className="offer__content"></div>
          
          <h3 className="offer__heading"><span>SAFE</span> DELIVERY</h3>
          <img className="offer__icon" src={travel}/>
          <p className="offer__text">We guarantee all of our puppies arrive in good health with a contract to protect the buyer.</p>
      </article>
      <article className="offer__item">
          <div className="offer__content"></div>
          
          <h3 className="offer__heading"><span>SUPPORT</span></h3>
          <img className="offer__icon" src={support}/>
          <p className="offer__text">We guarantee all of our puppies arrive in good health with a contract to protect the buyer.</p>
      </article>
   
  </section>
)

export default Offer
