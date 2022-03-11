import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"



const TestimonialsPage = () => (
  <body>
  <Layout>
    <Seo title="Gallery" />
    <section className="testimonials">
        <article className="testimonials__item">
        <StaticImage className="testimonials__item-image" src="../assets/testimonials.jpg" />
        <div className="testimonials__item-content">
            <h2 className="testimonials__item-heading">Kateryna</h2>
            <p className="testimonials__item-text">I recommend, very very great. Awesome. Great expierence, Fedor is the cutest.</p>
            </div>

        </article>
        <article className="testimonials__item">
        <StaticImage className="testimonials__item-image" src="../assets/testimonials2.jpg" />
        <div className="testimonials__item-content">
            <h2 className="testimonials__item-heading">Piotr</h2>
            <p className="testimonials__item-text">I recommend, very very great. Awesome. Great expierence, Fedor is the cutest.</p>
            </div>

        </article>
        <article className="testimonials__item">
        <StaticImage className="testimonials__item-image" src="../assets/testimonials.jpg" />
        <div className="testimonials__item-content">
            <h2 className="testimonials__item-heading">Kateryna</h2>
            <p className="testimonials__item-text">I recommend, very very great. Awesome. Great expierence, Fedor is the cutest.</p>
            </div>

        </article>
    
    </section>

    
  </Layout>
  </body>
)

export default TestimonialsPage
