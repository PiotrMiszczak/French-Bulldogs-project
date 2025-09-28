import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

function DogsPage() {
  

  const intl = useIntl()
  const { locale: lang} = intl

  const handleClick = name => {
    navigate(`/${lang}/#name`, {
      state: {
        message: intl.formatMessage({ id: "formTemplateMessage" }).replace("${name}",name),
      },
    })

    /*navigate("/#form",{state: {message:`Hello,
        
I'm intrested in purchasing ${dogName}. I'm looking forward to our contact and getting more information.`}})
*/
  }
  return (
    <Layout>
      <Seo title="Dogs" />
      <section className="dogs">
        <section>    
          <h2 className="section__header">{intl.formatMessage({ id: "dogHeader" })}</h2>
          <article className="dogs__article">
            <StaticImage className="dogs__image" src="../images/dog2.jpg" />
            <div className="dogs__info dogs__info-puppy">
              <div className="dogs__info-decoration"></div>
              <span className="dogs__name">{intl.formatMessage({ id: "dogName1" })}</span>
              <span className="dogs__price">{intl.formatMessage({ id: "dogPrice1" })}</span>
              <button
                className="dogs__button"
                onClick={e => handleClick(intl.formatMessage({ id: "dogName1" }))}
              >
                I'm interested
              </button>
            </div>
            <div className="dogs__details">
              <p className="dogs__text">
               {intl.formatMessage({ id: "dogDescription1" })}
              </p>
            </div>
          </article>
          <article className="dogs__article">
            <StaticImage className="dogs__image" src="../images/dog2.jpg" />
            <div className="dogs__info dogs__info-puppy">
              <div className="dogs__info-decoration"></div>
              <span className="dogs__name">{intl.formatMessage({ id: "dogName2" })}</span>
              <span className="dogs__price">{intl.formatMessage({ id: "dogPrice2" })}</span>
              <button
                className="dogs__button"
                onClick={e => handleClick(intl.formatMessage({ id: "dogName2" }))}
              >
                I'm interested
              </button>
            </div>
            <div className="dogs__details">
              <p className="dogs__text">
               {intl.formatMessage({ id: "dogDescription2" })}
              </p>
            </div>
          </article>
           <article className="dogs__article">
            <StaticImage className="dogs__image" src="../images/dog2.jpg" />
            <div className="dogs__info dogs__info-puppy">
              <div className="dogs__info-decoration"></div>
              <span className="dogs__name">{intl.formatMessage({ id: "dogName3" })}</span>
              <span className="dogs__price">{intl.formatMessage({ id: "dogPrice3" })}</span>
              <button
                className="dogs__button"
                onClick={e => handleClick(intl.formatMessage({ id: "dogName3" }))}
              >
                I'm interested
              </button>
            </div>
            <div className="dogs__details">
              <p className="dogs__text">
               {intl.formatMessage({ id: "dogDescription3" })}
              </p>
            </div>
          </article>
           <article className="dogs__article">
            <StaticImage className="dogs__image" src="../images/dog2.jpg" />
            <div className="dogs__info dogs__info-puppy">
              <div className="dogs__info-decoration"></div>
              <span className="dogs__name">{intl.formatMessage({ id: "dogName4" })}</span>
              <span className="dogs__price">{intl.formatMessage({ id: "dogPrice4" })}</span>
              <button
                className="dogs__button"
                onClick={e => handleClick(intl.formatMessage({ id: "dogName4" }))}
              >
                I'm interested
              </button>
            </div>
            <div className="dogs__details">
              <p className="dogs__text">
               {intl.formatMessage({ id: "dogDescription4" })}
              </p>
            </div>
          </article>
           <article className="dogs__article">
            <StaticImage className="dogs__image" src="../images/dog2.jpg" />
            <div className="dogs__info dogs__info-puppy">
              <div className="dogs__info-decoration"></div>
              <span className="dogs__name">{intl.formatMessage({ id: "dogName5" })}</span>
              <span className="dogs__price">{intl.formatMessage({ id: "dogPrice5" })}</span>
              <button
                className="dogs__button"
                onClick={e => handleClick(intl.formatMessage({ id: "dogName5" }))}
              >
                I'm interested
              </button>
            </div>
            <div className="dogs__details">
              <p className="dogs__text">
               {intl.formatMessage({ id: "dogDescription5" })}
              </p>
            </div>
          </article>
        </section>
      </section>
    </Layout>
  )
}
export default DogsPage
