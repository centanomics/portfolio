// imports

import * as React from "react"

// components
import Header from './Header'
import Footer from './Footer'

// styles

const indexStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
  margin: "0 auto",
}

// markup

const Layout = ({ children }) => {
  return (
    <div style={ indexStyles }>
      <Header/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout