import * as React from "react"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import us from "../assets/us.svg"
import ua from "../assets/ua.svg"

function LocaleButton() {
  const intl = useIntl()
  const { locale: lang } = intl
  console.log(lang)

  function handleClick(){
    if(document.body.classList.contains("stop-scrolling")){
      document.body.classList.remove("stop-scrolling")
    }
    if(lang=="ua"){
changeLocale("en")
    }
    else{
changeLocale("ua")
    }
  }

  return (
    <button
      onClick={
        handleClick
      }
      className="navigation__language"
    >
      <img src={lang == "ua" ? us : ua} alt="country flag" />
    </button>
  )
}

export default LocaleButton
