import React from "react"
// import Menu from "./menu-cloud"
import Navigation from "./navigation"
import "./navigation.css"
// import "./menu2.css"
import "./hero-slider-style.css"
import "./magnific-popup.css"
import "./templatemo-style.css"

const Layout3 = ({ children }) => {
  return (
    <div className="app">
      <Navigation />
      <div className="wrapper">
        {/* <Menu /> */}
        <div className="cd-hero">{children}</div>
        <footer className="footer">
          <div>© 2020 by Stork. All rights reserved.</div>
        </footer>
      </div>
    </div>
  )
}

export default Layout3
