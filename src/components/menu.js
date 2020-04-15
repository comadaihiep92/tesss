import React from "react"
// import "./menu.css"
import "./bootstrap.min.css"
import "./hero-slider-style.css"
import "./magnific-popup.css"
import "./templatemo-style.css"
// import Menu from "./menu"

export default () => {
  return (
    <header>
      {/* <!-- Navigation -->         */}
      <div className="cd-slider-nav">
        <nav className="navbar container">
          <div className="tm-navbar-bg">
            <button
              className="navbar-toggler hidden-lg-up"
              type="button"
              data-toggle="collapse"
              data-target="#tmNavbar"
            >
              &#9776;
            </button>
            <div
              className="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar"
              id="tmNavbar"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item active selected">
                  <a className="nav-link" href="#0" data-no="1">
                    <div>
                      <img
                        src="img/cloud.svg"
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                      />
                    </div>
                    Cloud <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-no="2">
                    <div>
                      <img
                        src="img/ecommerce.svg"
                        role="presentation"
                        width="30px"
                      />
                    </div>
                    Ecommerce
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-no="3">
                    <div>
                      <img
                        src="img/email.svg"
                        role="presentation"
                        width="30px"
                      />
                    </div>
                    Email
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-no="4">
                    <div>
                      <img
                        src="img/podcast.svg"
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                      />
                    </div>
                    Podcast
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-no="5">
                    <div>
                      <img
                        src="img/sites.svg"
                        role="presentation"
                        width="30px"
                      />
                    </div>
                    Sites
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-no="6">
                    <div>
                      <img
                        src="img/video.svg"
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                      />
                    </div>
                    Video
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#0" data-no="6">
                    <div>
                      <img
                        src="img/cursos.svg"
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                      />
                    </div>
                    Cursos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <div>
        <h3 classNameName="nav-brand">
          <a href={`/`}>Gatsby Blog Demo</a>
        </h3>
        <ul>
          <li classNameName="nav-item">
            <a href={`/page-2/`}>Page 2</a>
          </li>

          <li classNameName="nav-item">
            <a href={`/`}>Trang chủ</a>
          </li>
        </ul>
      </div> */}
    </header>
  )
}
