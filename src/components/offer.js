import * as React from "react"
import { Link } from "gatsby"
import peace from "../assets/peace.svg"
import health from "../assets/health.svg"
import travel from "../assets/travel.svg"
import support from "../assets/support.svg"
import { useIntl} from "gatsby-plugin-intl"

function Offer(){
    const intl = useIntl();
    return(
        <section className="offer">
      <article className="offer__item">
          <div className="offer__content"></div>
          
          <h3 className="offer__heading">{intl.formatMessage({ id: "offer1Header" })}</h3>
          <img alt="woman medidating" className="offer__icon" src={peace}/>
          <p className="offer__text">{intl.formatMessage({ id: "offer1Content" })}</p>
      </article>
      <article className="offer__item">
          <div className="offer__content"></div>
          
        <h3 className="offer__heading">{intl.formatMessage({ id: "offer2Header" })}</h3>
          <img alt="doctors talking" className="offer__icon" src={health}/>
          <p className="offer__text">{intl.formatMessage({ id: "offer2Content" })}</p>
      </article>
      <article className="offer__item">
          <div className="offer__content"></div>
          
         <h3 className="offer__heading">{intl.formatMessage({ id: "offer3Header" })}</h3>
          <img alt="plane flying" className="offer__icon" src={travel}/>
         <p className="offer__text">{intl.formatMessage({ id: "offer3Content" })}</p>
      </article>
      <article className="offer__item">
          <div className="offer__content"></div>
          
         <h3 className="offer__heading">{intl.formatMessage({ id: "offer4Header" })}</h3>
          <img alt="conversation icon" className="offer__icon" src={support}/>
         <p className="offer__text">{intl.formatMessage({ id: "offer4Content" })}</p>
      </article>
   
  </section>
    )
}
    
  


export default Offer
