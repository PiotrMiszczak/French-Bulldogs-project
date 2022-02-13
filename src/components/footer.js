import * as React from "react"
import { Link } from "gatsby"
import facebookIcon from "../assets/Vector.svg"
import instagramIcon from "../assets/Vector (1).svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container footer__container-top">
        <span className="footer__heading">French bulldogs</span>
        <div className="footer__socials">
          <a href="#" className="footer__socials-link">
            <img alt="facebook icon" src={facebookIcon}></img>
          </a>
          <a href="#" className="footer__socials-link">
            <img alt="facebook icon" src={instagramIcon}></img>
          </a>
        </div>
      </div>
      <div className="footer__container footer__container-bottom">
        <section className="footer__section">
          <h3>About</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </section>
        <section className="footer__section">
          <h3>Contact</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </section>
        <section className="footer__section">
          <h3>Navigations</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
