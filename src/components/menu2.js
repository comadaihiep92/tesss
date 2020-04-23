import React from "react"
import "./menu.css"
import "./bootstrap.min.css"
import "./hero-slider-style.css"
import "./magnific-popup.css"
import "./templatemo-style.css"

import { Helmet } from "react-helmet"

const Menu2 = () => {
  return (
    <header>
      {/* <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" />
      </Helmet> */}
      {/* <!-- Navigation -->         */}
      <nav
        data-baseweb="header-navigation"
        id="font-stork"
        role="navigation"
        className="o0 bf o1 bg bw rt ru rv bh bj rw rx bc cp cq hi nav"
      >
        <div className="bw ex ry rz od ob nav__flex">
          <ul className="bw s0 s1 s2 hf hg s3 gz f9 cm cn g5 ey">
            <li className="do cp s4 cm">
              <a
                data-baseweb="link"
                href="#"
                target="_self"
                aria-label="Go to Uber.com"
                data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_logo.link_cta25"
                className="bv s5 m7 j3 s6 s7 s8 s9 cx sa sb sc ca sd b5 bj hi bw s4 se cw c4 sf"
              >
                Uber
              </a>
            </li>
          </ul>
          <ul className="bw s0 s1 s2 hf hg s3 gz f9 cm cn g5 ey">
            <li className="do cp h5 cm item__about">
              <button
                data-baseweb="button"
                aria-label="Learn more about Uber as a company"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
                className=" sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bv bh ta tb nav__text"
              >
                About us
                {/* <div className="bw dw">
                  <svg
                    data-baseweb="icon"
                    viewBox="0 0 24 24"
                    className="nq a1z c1 a20 a21"
                  >
                    <title>Chevron Down</title>
                    <path
                      transform="rotate(270, 12, 12)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                    ></path>
                  </svg>
                </div> */}
              </button>
            </li>
            <li className="do cp h5 cm nav__item">
              <button
                data-baseweb="button"
                aria-label="Click here to see Uber products"
                href=""
                aria-haspopup="true"
                aria-expanded="false"
                className="sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bv bh ta tb nav__text"
              >
                {/* <div className="bw a1r">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
                      fill="white"
                    ></path>
                  </svg>
                </div> */}
                Products
              </button>
              <div className="or sub-menu">
                <ul
                  role="listbox"
                  tabIndex="0"
                  data-baseweb="menu"
                  className="dv bj cn cm g5 ey a22 a23 cp cq vk vi vj vl a24 a25 cx a2c a2d sub-menu__list"
                >
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Home (outlined)</title>
                        <path
                          d="M12 1L2 10.1V23h20V10.1L12 1zm7 19h-5v-6h-4v6H5v-8.6L12 5l7 6.4V20z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[0].link_cta12"
                        label="Home"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Home
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Car front (outlined)</title>
                        <path
                          d="M21 9l-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.8 0-1.6.6-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2zm-3 7H5v-1h4v-3H5.2l2-6h9.7l2 6H15v3h4v1h-1z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[1].link_cta13"
                        label="Ride"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Ride
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Steering wheel (outlined)</title>
                        <path
                          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 3c3.9 0 7.1 2.8 7.9 6.5h-3.1c-.6-2-2.5-3.5-4.7-3.5S8 8.5 7.4 10.5H4.3C4.9 6.8 8.1 4 12 4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7.9-.5h3.1c.5 1.5 1.7 2.8 3.2 3.2v3.1c-3.1-.6-5.6-3.1-6.3-6.3zm9.4 6.4v-3.1c1.5-.5 2.8-1.7 3.2-3.2h3.1c-.6 3.1-3.1 5.6-6.3 6.3z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[2].link_cta14"
                        label="Drive"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Drive
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Restaurant (outlined)</title>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 8V1H9v7H7V1H5v7H3V1H1v7c0 2.3 1.5 4.2 3.5 4.8V23h3V12.8c2-.7 3.5-2.6 3.5-4.8zm2-2c0-2.8 2.2-5 5-5s5 2.2 5 5v2c0 2.2-1.5 4.1-3.5 4.7V23h-3V12.7c-2-.6-3.5-2.5-3.5-4.7V6zm5 4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v2c0 1.1.9 2 2 2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[3].link_cta15"
                        label="Eat"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Eat
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Wine (outlined)</title>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 3v4.4c1.8.8 3 2.6 3 4.6v11H13V12c0-2.1 1.2-3.8 3-4.6V3h-1V1h6v2h-1zm-4 9v8h4v-8c0-.8-.5-1.5-1.2-1.8l-.8-.3-.8.3c-.7.3-1.2 1-1.2 1.8zM4.5 16.7C2.5 16.1 1 14.2 1 12V7h10v5c0 2.2-1.5 4.1-3.5 4.7V20H10v3H2v-3h2.5v-3.3zM8 10H4v2c0 1.1.9 2 2 2s2-.9 2-2v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[4].link_cta16"
                        label="Restaurants"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Restaurants
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Truck (outlined)</title>
                        <path
                          d="M22 10V1H2v9H1v6h2v7h4v-2h10v2h4v-7h2v-6h-1zM6 17h4v-3H6V9h12v5h-4v3h4v1H6v-1zM19 4v2H5V4h14z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[5].link_cta17"
                        label="Freight"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Freight
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Job busser (outlined)</title>
                        <path
                          d="M21.9 12c-.3-2.8-2.3-5-4.9-5.8C15.7 3.7 13 2 9.9 2c-4.4 0-8 3.6-8 8 0 .7.1 1.4.3 2H1v5c0 2.8 2.2 5 5 5h12c2.8 0 5-2.2 5-5v-5h-1.1zm-3 0h-7.3c.3-1.7 1.9-3 3.7-3 1.8 0 3.3 1.3 3.6 3zM5 10c0-2.8 2.2-5 5-5 1.3 0 2.4.5 3.3 1.3-2.5.8-4.4 3-4.7 5.7H5.5c-.3-.6-.5-1.3-.5-2zm15 7c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2h16v2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[6].link_cta18"
                        label="Work"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Work
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Bike jump (outlined)</title>
                        <path
                          d="M24 5h-6.67l-.83-2H12v3h2.5l1.15 2.76L11.38 13h-.62L7.49 5H3v3h2.5l.43 1.03C5.79 9.02 5.65 9 5.5 9A5.51 5.51 0 000 14.5C0 17.53 2.47 20 5.5 20c2.51 0 4.63-1.7 5.29-4h1.83l.48-.48A5.505 5.505 0 0018.5 20c3.03 0 5.5-2.47 5.5-5.5 0-1.74-.81-3.29-2.08-4.3L24 8.12V5zM5.5 17a2.5 2.5 0 11.002-5.002A2.5 2.5 0 015.5 17zm14.38-9l-.91.91-.39-.91h1.3zm-1.38 9a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[7].link_cta19"
                        label="JUMP"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          JUMP
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Briefcase (outlined)</title>
                        <path
                          d="M18 6V1H6v5H1v16h22V6h-5zM9 4h6v2H9V4zm11 15H4V9h16v10z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[8].link_cta20"
                        label="Business"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Business
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Airplane depart (outlined)</title>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.6 5.3c.9 1.9.1 4.2-1.8 5.1L4.4 18.9 0 10.2l2.6-1.1 2 1 3-1.5-3-6L8.1.9l7.1 4 3-1.5c2-1 4.5-.2 5.4 1.9zM9.3 4.8l2.5 5.1-6.7 3.4L6 15l14.6-7.3c.4-.2.6-.7.4-1.2-.2-.5-.8-.7-1.3-.5l-4.4 2.2-6-3.4zM0 21h24v3H0v-3z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[9].link_cta21"
                        label="Elevate"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Elevate
                        </div>
                      </a>
                    </div>
                  </li>
                  <li className="c4 bw a2e bk cj a2f a2g">
                    <div className="c4 bw hf hg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        size="16"
                      >
                        <title>Money (outlined)</title>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1 20V4h22v16H1zm16-6h3V7H7v3H4v7h13v-3zm-2-2a3 3 0 11-6 0 3 3 0 016 0z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="a2h a2i a2j c4 a2k a2l a2m bw a2n a2f bx th wv">
                      <a
                        className="b5"
                        href="#"
                        aria-label=""
                        target="_self"
                        data-tracking-name="_df920f60-6b89-4d30-b760-f5c70aab5461_lob.childNodes[10].link_cta22"
                        label="Money"
                      >
                        <div
                          data-baseweb="typo-labellarge"
                          className="bi o0 cu hq bg"
                        >
                          Money
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="do cp h5 cm item__about">
              <a
                data-baseweb="button"
                aria-label="Learn more about Uber as a company"
                href="/blog"
                aria-haspopup="true"
                aria-expanded="false"
                className=" sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bv bh ta tb nav__text"
              >
                Blog
                {/* <div className="bw dw">
                  <svg
                    data-baseweb="icon"
                    viewBox="0 0 24 24"
                    className="nq a1z c1 a20 a21"
                  >
                    <title>Chevron Down</title>
                    <path
                      transform="rotate(270, 12, 12)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                    ></path>
                  </svg>
                </div> */}
              </a>
            </li>
          </ul>

          <ul className="bw s0 s1 s2 hf hg si sj f9 cm cn g5 ey">
            <li className="do cp h5 cm">
              <button
                data-baseweb="button"
                className="sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bv bh ta tb"
              >
                <div className="bw a1r">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    size="16"
                  >
                    <title>Person (outlined)</title>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.5 6.5c0 3-2.5 5.5-5.5 5.5S6.5 9.5 6.5 6.5 9 1 12 1s5.5 2.5 5.5 5.5zm-3 0C14.5 5.1 13.4 4 12 4S9.5 5.1 9.5 6.5 10.6 9 12 9s2.5-1.1 2.5-2.5zM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3h-3v-3c0-1.7-1.4-3-3-3H9c-1.6 0-3 1.3-3 3v3H3v-3z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                Log in
              </button>
            </li>

            <li className="do cp h5 cm item__sign-up">
              <button
                data-baseweb="button"
                className="sl c2 c4 hk sm sn so sp sq sr ss st c8 su sv b5 sw sx s8 s9 cj sy sz t0 g5 cn ey cm o0 ck cu t1 tc td te tf t6 t7 tg th bi dv ti tj tb tk tl"
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

export default Menu2
