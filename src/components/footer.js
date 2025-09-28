import * as React from "react"
import facebookIcon from "../assets/fb.svg"
import instagramIcon from "../assets/insta.svg"
import tiktokIcon from "../assets/tiktok.svg"


const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container footer__container-top">
        <span className="footer__heading">Angel Dogs</span>
        <div className="footer__socials">
          <a href="#" className="footer__socials-link">
            <img alt="facebook icon" src={facebookIcon}></img>
          </a>
          <a href="#" className="footer__socials-link">
            <img alt="facebook icon" src={instagramIcon}></img>
          </a>
          <a href="#" className="footer__socials-link">
            <img alt="tiktok icon" src={tiktokIcon}></img>
          </a>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
