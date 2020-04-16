import React from "react"
import "./menu2.css"
import "./bootstrap.min.css"
import "./hero-slider-style.css"
import "./magnific-popup.css"
import "./templatemo-style.css"

import { Helmet } from "react-helmet"

// import "../js/bootstrap.min.js"
// import "../js/hero-slider-main.js"
// import "../js/jquery-1.11.3.min.js"
// import "../js/jquery.magnific-popup.min.js"
// import "../js/jquery.magnific-popup.min.js"

import cloud from "../img/cloud.svg"
import ecommerce from "../img/ecommerce.svg"
import email from "../img/email.svg"
import podcast from "../img/podcast.svg"
import sites from "../img/sites.svg"
import video from "../img/video.svg"
import cursos from "../img/cursos.svg"
// import Menu from "./menu"

export default () => {
  return (
    <header>
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" />
      </Helmet>
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
                  <a className="nav-link" href={`/`} data-no="1">
                    <div>
                      <img
                        src={cloud}
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                        alt=""
                      />
                    </div>
                    Cloud <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/`} data-no="2">
                    <div>
                      <img
                        src={ecommerce}
                        role="presentation"
                        width="30px"
                        alt=""
                      />
                    </div>
                    Ecommerce
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/`} data-no="3">
                    <div>
                      <img
                        src={email}
                        role="presentation"
                        width="30px"
                        alt=""
                      />
                    </div>
                    Email
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/`} data-no="4">
                    <div>
                      <img
                        src={podcast}
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                        alt=""
                      />
                    </div>
                    Podcast
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/`} data-no="5">
                    <div>
                      <img
                        src={sites}
                        role="presentation"
                        width="30px"
                        alt=""
                      />
                    </div>
                    Sites
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/`} data-no="6">
                    <div>
                      <img
                        src={video}
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                        alt=""
                      />
                    </div>
                    Video
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/`} data-no="7">
                    <div>
                      <img
                        src={cursos}
                        role="presentation"
                        aria-hidden="true"
                        width="30px"
                        alt=""
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
