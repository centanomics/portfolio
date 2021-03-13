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
        Header
      </header>
    </div>
  )
}

export default Header