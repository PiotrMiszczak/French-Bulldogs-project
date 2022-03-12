import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"



function TestimonialsPage(){
    const [dogName,setDogName] = React.useState('')
    const [value,setValue] = React.useState('')

    const handleClick = (name)=>{
       navigate("/#form",{state: {message:`Hello,
        
I'm intrested in purchasing ${name}. I'm looking forward to our contact and getting more information.`,}})
        
        
       /*navigate("/#form",{state: {message:`Hello,
        
I'm intrested in purchasing ${dogName}. I'm looking forward to our contact and getting more information.`}})
*/
    }
    return(
  <body>
  <Layout>
    <Seo title="Dogs" />
    <section className="dogs">
        <section>
        <h2 className="dogs__heading">Parents</h2>
        <article className="dogs__article">
        <StaticImage className="dogs__image" src="../images/dog1b.jpg" />
        <div className="dogs__info">
            <div className="dogs__info-decoration"></div>
            <span className="dogs__name">Fedor</span>
            <span className="dogs__breed">Cutie patuti deluxe</span>
            <div className="dogs__info-decoration"></div>
        </div>
        <div className="dogs__details">
            <p className="dogs__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged</p>
        </div>
        </article>
        <article className="dogs__article">
        <StaticImage className="dogs__image" src="../images/dog1b.jpg" />
        <div className="dogs__info">
            <div className="dogs__info-decoration"></div>
            <span className=" dogs__name dogs__name-female">Fedorina</span>
            <span className="dogs__breed">Cutie patuti deluxe</span>
            <div className="dogs__info-decoration"></div>
        </div>
        <div className="dogs__details">
            <p className="dogs__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged</p>
        </div>
        </article>
        <h2 className="dogs__heading">Puppies</h2>
        <article className="dogs__article">
        <StaticImage className="dogs__image" src="../images/dog1b.jpg" />
        <div className="dogs__info dogs__info-puppy">
            <div className="dogs__info-decoration"></div>
            <span className="dogs__name">Fedor</span>
            <span className="dogs__price">100 000$</span>
            <button className="dogs__button" onClick={(e)=>handleClick('Fedor',e)}>I'm interested</button>
            <div className="dogs__info-decoration"></div>
        </div>
        <div className="dogs__details">
            <p className="dogs__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged</p>
        </div>
        </article>
        <article className="dogs__article">
        <StaticImage className="dogs__image" src="../images/dog1b.jpg" />
        <div className="dogs__info dogs__info-puppy">
            <div className="dogs__info-decoration"></div>
            <span className="dogs__name">Waldek</span>
            <span className="dogs__price">1000$</span>
            <button className="dogs__button" onClick={(e)=>handleClick('Waldek','F',e)}>I'm interested</button>
            <div className="dogs__info-decoration"></div>
        </div>
        <div className="dogs__details">
            <p className="dogs__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged</p>
        </div>
        </article>
        </section>
        

    </section>
     

    
  </Layout>
  </body>
)
}
export default TestimonialsPage
