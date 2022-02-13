import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="header__title">{siteTitle}</h1>
    <nav className="navigation">
      <Link href="#" className="navigation__link link">
        About us
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
      <Link href="#" className="navigation__link link">
        Parents
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
      <Link href="#" className="navigation__link link">
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
      <Link href="#" className="navigation__link link">
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
  </header>
)

export default Header
