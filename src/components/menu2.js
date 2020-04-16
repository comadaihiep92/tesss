import React from "react"
// import "./menu.css"
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
      {/* <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" />
      </Helmet> */}
      {/* <!-- Navigation -->         */}
      <nav
        data-baseweb="header-navigation"
        role="navigation"
        class="o0 bf o1 bg bw rt ru rv bh bj rw rx bc cp cq hi nav"
      >
        <div class="bw ex ry rz od ob nav__flex">
          <ul class="bw s0 s1 s2 hf hg s3 gz f9 cm cn g5 ey">
            <li class="do cp s4 cm">
              <a
                data-baseweb="link"
                href="#"
                target="_self"
                aria-label="Go to Uber.com"
                data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_logo.link_cta25"
                class="bv s5 m7 j3 s6 s7 s8 s9 cx sa sb sc ca sd b5 bj hi bw s4 se cw c4 sf"
              >
                Uber
              </a>
            </li>
          </ul>
          <ul class="bw s0 s1 s2 hf hg s3 gz f9 cm cn g5 ey">
            <li class="do cp h5 cm">
              <button
                data-baseweb="button"
                aria-label="Learn more about Uber as a company"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
                class="sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bv bh ta tb nav__text"
              >
                About us
                <div class="bw dw">
                  <svg
                    data-baseweb="icon"
                    viewBox="0 0 24 24"
                    class="nq a1z c1 a20 a21"
                  >
                    <title>Chevron Down</title>
                    <path
                      transform="rotate(270, 12, 12)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </li>
            <button
              data-baseweb="button"
              aria-label="Click here to see Uber products"
              href="#"
              aria-haspopup="true"
              aria-expanded="false"
              class="sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bv bh ta tb nav__text"
            >
              <div class="bw a1r">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              Products
            </button>
          </ul>

          <ul class="bw s0 s1 s2 hf hg si sj f9 cm cn g5 ey">
            <li class="do cp h5 cm">
              <button
                data-baseweb="button"
                class="sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bv bh ta tb"
              >
                <div class="bw a1r">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    size="16"
                  >
                    <title>Person (outlined)</title>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5 6.5c0 3-2.5 5.5-5.5 5.5S6.5 9.5 6.5 6.5 9 1 12 1s5.5 2.5 5.5 5.5zm-3 0C14.5 5.1 13.4 4 12 4S9.5 5.1 9.5 6.5 10.6 9 12 9s2.5-1.1 2.5-2.5zM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3h-3v-3c0-1.7-1.4-3-3-3H9c-1.6 0-3 1.3-3 3v3H3v-3z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                Log in
              </button>
            </li>

            <li class="do cp cq cm">
              <button
                data-baseweb="button"
                class="sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bi dv ti tj tb tk tl"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
