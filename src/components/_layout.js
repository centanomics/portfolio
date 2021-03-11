import * as React from "react"

// component calls
import Header from './Header'
import Footer from './Footer'

// markup

const Layout = ({ children }) => {
  return (
    <main>
      <Header/>
      {children}
      <Footer />
    </main>
  )
}

export default Layout