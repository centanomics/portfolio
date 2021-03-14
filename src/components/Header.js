// imports

import * as React from "react"

// styles

const headerStyles = {
  display: "grid",
  gridTemplateAreas: "A A C C  C C C C  C B B B",
}

// markup

const Header = () => {
  return (
    <div>
      <header styles={ headerStyles } className="frame">
        <h1>Cent</h1>
        <nav>
          <ul>
            <li>
              About
            </li>
            <li>
              Blog
            </li>
            <li>
              Contact
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header