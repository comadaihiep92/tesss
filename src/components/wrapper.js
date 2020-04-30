import React from "react"
// import "./layout.css"
// import "./bootstrap.min.css"
// import "./hero-slider-style.css"
// import "./magnific-popup.css"
// import "./templatemo-style.css"
// import Menu from "./menu"

import "./menu.css"

export default ({ children }) => {
  return (
    <div className="app">
      <Menu />
      <div className="cd-hero">{children}</div>
    </div>
  )
}
