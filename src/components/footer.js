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
          
          <a href="https://www.instagram.com/angelova_liliya/" className="footer__socials-link">
            <img alt="instagram icon" src={instagramIcon}></img>
          </a>
          <a href="https://www.tiktok.com/@angelova_liliya?_t=ZN-906w7tMhs1O&_r=1" className="footer__socials-link">
            <img alt="tiktok icon" src={tiktokIcon}></img>
          </a>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
