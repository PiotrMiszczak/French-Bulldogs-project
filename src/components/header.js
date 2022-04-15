import React, {useState} from "react"
import { Link } from "gatsby"


function Header({ siteTitle }){
  
const [menu,setMenu] = useState(false);

function handleClick(){
  setMenu(!menu);
  document.body.classList.toggle('stop-scrolling');
  
  

}
   
  
  return(
  <header className="header">
    <Link className="link" to="/"><h1 className="header__title">{siteTitle}</h1></Link>
    <nav className="navigation">
      <Link to="/dogs" className="navigation__link link">
        Dogs
        <svg
          className="link__graphic link__graphic--stroke link__graphic--arc"
          width="100%"
          height="18"
          viewBox="0 0 59 18"
        >
          <path
            d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
            pathLength="1"
          />
        </svg>
      </Link>
      <Link to="/gallery" className="navigation__link link">
        Gallery
        <svg
          className="link__graphic link__graphic--stroke link__graphic--arc"
          width="100%"
          height="18"
          viewBox="0 0 59 18"
        >
          <path
            d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
            pathLength="1"
          />
        </svg>
      </Link>
      <Link to="/testimonials" className="navigation__link link">
        Testimonials
        <svg
          className="link__graphic link__graphic--stroke link__graphic--arc"
          width="100%"
          height="18"
          viewBox="0 0 59 18"
        >
          <path
            d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
            pathLength="1"
          />
        </svg>
      </Link>
  
      
    </nav>
    <button onClick={handleClick} className="navigation__button">
<span className={menu ? "navigation__hamburger navigation__hamburger-active" :"navigation__hamburger"}>
  <span className="navigation__hamburger-inner"> </span>
</span>
      </button>
      <nav className={menu ? "navigation__modal navigation__modal-active":"navigation__modal"}>
        <ul className="navigation__list">
          <li onClick={handleClick}><Link to="/dogs" className="navigation__link link">Dogs</Link></li>
          <li onClick={handleClick}><Link to="/gallery" className="navigation__link link">Gallery</Link></li>
          <li onClick={handleClick}><Link to="/testimonials" className="navigation__link link">Testimonials</Link></li>
        </ul>

      </nav>
  </header>
)
  }

export default Header
