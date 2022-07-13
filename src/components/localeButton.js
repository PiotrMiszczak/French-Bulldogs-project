import * as React from "react"
import { Link } from "gatsby"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import us from "../assets/us.svg"
import ua from "../assets/ua.svg"

function LocaleButton(){
const intl = useIntl();
const { locale: lang, messages } = intl;
console.log(lang)

    return (
        
        <button onClick={lang=='ru' ? ()=>changeLocale('en') : ()=>changeLocale('ru')} className="navigation__language">
        <img src={lang=='ru' ? us : ua} alt="country flag"/>
      </button>
        
      )

}
  


export default LocaleButton
