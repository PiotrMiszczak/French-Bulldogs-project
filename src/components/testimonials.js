import * as React from "react";
import blackDiv from "../assets/blackShapeDiv.svg"
import purpleDiv from "../assets/purpleShapeDiv.svg"
import purpleDiv2 from "../assets/blackShapeDiv2.svg"
import blackDiv2 from "../assets/purpleShapeDiv2.svg"
import blackDiv3 from "../assets/blackShapeDiv3.svg"
import purpleDiv3 from "../assets/purpleShapeDiv3.svg"

function Testimonials(){
    
  
    return(
        <section className="testimonials">
            <h2 className="testimonials__heading">Testimonials</h2>
            <div className="testimonials__content">
           
            <article className="testimonials__item">
                <img className="testimonials__decoration testimonials__decoration-black" src={blackDiv2} />
                <img className="testimonials__decoration testimonials__decoration-purple testimonials__decoration-purple-left" src={purpleDiv2}/>


            </article>
            <article className="testimonials__item">
                <img className="testimonials__decoration testimonials__decoration-black" src={blackDiv} />
                <img className="testimonials__decoration testimonials__decoration-purple testimonials__decoration-purple-center" src={purpleDiv}/>


            </article>
            <article className="testimonials__item">
                <img className="testimonials__decoration testimonials__decoration-black" src={blackDiv3} />
                <img className="testimonials__decoration testimonials__decoration-purple testimonials__decoration-purple-right" src={purpleDiv3}/>


            </article>
            </div>
        </section>
       
    )
}

export default Testimonials
