import * as React from "react"
import { Link } from "gatsby"
import facebookIcon from "../assets/Vector.svg"
import instagramIcon from "../assets/Vector (1).svg"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container footer__container-top">
        <span className="footer__heading">Cherkasy Frenchies</span>
        <div className="footer__socials">
          <a href="#" className="footer__socials-link">
            <img alt="facebook icon" src={facebookIcon}></img>
          </a>
          <a href="#" className="footer__socials-link">
            <img alt="facebook icon" src={instagramIcon}></img>
          </a>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
