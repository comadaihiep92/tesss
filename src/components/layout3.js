import React from "react"
// import menu from "./menu.css"
// import bootstrap from "./bootstrap.min.css"
// import hero from "./hero-slider-style.css"
// import mag from "./magnific-popup.css"
// import temp from "./templatemo-style.css"
import Menu from "./menu-cloud"
import Menu2 from "./menu2"

import "./menu.css"

const Layout3 = ({ children }) => {
  return (
    <div className="app">
      <Menu2 />
      <div className="wrapper">
        <Menu />
        <div className="">{children}</div>
        <footer class="footer">
          <div>© 2020 by Stork. All rights reserved.</div>
        </footer>
      </div>
    </div>
  )
}

export default Layout3
