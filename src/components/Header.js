// imports

import * as React from "react"
import { Link } from "gatsby"

// components

import Logo from "./_logo"

// styles

const headerStyles = {
  display: "grid",
  gridTemplateAreas: "A A C C  C C C C  C B B B",
}

const logoStyles = {
  gridArea: "A",
}

const navStyles = {
  display: "inline-block",
  gridArea: "B",
}

// markup

const Header = () => {
  return (
    <div>
      <header styles={ headerStyles } className="frame">
        <Link to="/" styles={ logoStyles }>
          <Logo size="25" color="black"/>
        </Link>
        <nav styles={ navStyles } >
          <ul>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <a href="https://dailytwocents.dev">
                Blog
              </a>
            </li>
            <li>
              <a href="mailto:centanomics@gmail.com?subject=Hi Cent!">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header