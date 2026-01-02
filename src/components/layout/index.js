import React from "react"
import Footer from "../footer"
import Navbar from "../nav"

const Layout = ({ children }) => {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
