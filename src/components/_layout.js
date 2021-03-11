import * as React from "react"

// component calls
import Header from './Header'
import Footer from './Footer'

//css

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