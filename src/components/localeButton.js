import * as React from "react"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import us from "../assets/us.svg"
import ua from "../assets/ua.svg"

function LocaleButton() {
  const intl = useIntl()
  const { locale: lang } = intl
  console.log(lang)

  return (
    <button
      onClick={
        lang == "ua" ? () => changeLocale("en") : () => changeLocale("ua")
      }
      className="navigation__language"
    >
      <img src={lang == "ua" ? us : ua} alt="country flag" />
    </button>
  )
}

export default LocaleButton
