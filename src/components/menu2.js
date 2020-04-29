import React from "react"
import "./menu.css"

const Menu2 = () => {
  return (
    <header>
      <nav className="nav nav--height">
        <div className="nav__flex">
          <ul className="nav__item">
            <li className="nav__item-li">
              <a href="/" target="_self" className="nav__link">
                Uber
              </a>
            </li>
          </ul>
          <ul className="nav__item">
            <li className="nav__item-li item__about">
              <button className="nav__text">About us</button>
            </li>
            <li className="nav__item-li nav__item-hover">
              <button className=" nav__text">Products</button>
              <div className="sub-menu">
                <ul
                  role="listbox"
                  tabIndex="0"
                  data-baseweb="menu"
                  className="sub-menu__list"
                >
                  <li className="sub-menu__list-item">
                    <div className="item__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <title>Home (outlined)</title>
                        <path
                          d="M12 1L2 10.1V23h20V10.1L12 1zm7 19h-5v-6h-4v6H5v-8.6L12 5l7 6.4V20z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="item__text">
                      <a href="#" target="_self">
                        <div className="item__link">Cloud</div>
                      </a>
                    </div>
                  </li>
                  <li className="sub-menu__list-item">
                    <div className="item__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <title>Car front (outlined)</title>
                        <path
                          d="M21 9l-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.8 0-1.6.6-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2zm-3 7H5v-1h4v-3H5.2l2-6h9.7l2 6H15v3h4v1h-1z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="item__text">
                      <a href="#" target="_self">
                        <div className="item__link">Ecommerce</div>
                      </a>
                    </div>
                  </li>
                  <li className="sub-menu__list-item">
                    <div className="item__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <title>Steering wheel (outlined)</title>
                        <path
                          d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 3c3.9 0 7.1 2.8 7.9 6.5h-3.1c-.6-2-2.5-3.5-4.7-3.5S8 8.5 7.4 10.5H4.3C4.9 6.8 8.1 4 12 4zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7.9-.5h3.1c.5 1.5 1.7 2.8 3.2 3.2v3.1c-3.1-.6-5.6-3.1-6.3-6.3zm9.4 6.4v-3.1c1.5-.5 2.8-1.7 3.2-3.2h3.1c-.6 3.1-3.1 5.6-6.3 6.3z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="item__text">
                      <a href="#" target="_self">
                        <div className="item__link">Email</div>
                      </a>
                    </div>
                  </li>
                  <li className="sub-menu__list-item">
                    <div className="item__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
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
                    <div className="item__text">
                      <a href="#" target="_self">
                        <div className="item__link">Podcast</div>
                      </a>
                    </div>
                  </li>
                  <li className="sub-menu__list-item">
                    <div className="item__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
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
                    <div className="item__text">
                      <a href="#" target="_self">
                        <div className="item__link">Sites</div>
                      </a>
                    </div>
                  </li>
                  <li className="sub-menu__list-item">
                    <div className="item__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <title>Truck (outlined)</title>
                        <path
                          d="M22 10V1H2v9H1v6h2v7h4v-2h10v2h4v-7h2v-6h-1zM6 17h4v-3H6V9h12v5h-4v3h4v1H6v-1zM19 4v2H5V4h14z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="item__text">
                      <a href="#" target="_self">
                        <div className="item__link">Video</div>
                      </a>
                    </div>
                  </li>
                  <li className="sub-menu__list-item">
                    <div className="item__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <title>Job busser (outlined)</title>
                        <path
                          d="M21.9 12c-.3-2.8-2.3-5-4.9-5.8C15.7 3.7 13 2 9.9 2c-4.4 0-8 3.6-8 8 0 .7.1 1.4.3 2H1v5c0 2.8 2.2 5 5 5h12c2.8 0 5-2.2 5-5v-5h-1.1zm-3 0h-7.3c.3-1.7 1.9-3 3.7-3 1.8 0 3.3 1.3 3.6 3zM5 10c0-2.8 2.2-5 5-5 1.3 0 2.4.5 3.3 1.3-2.5.8-4.4 3-4.7 5.7H5.5c-.3-.6-.5-1.3-.5-2zm15 7c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2h16v2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="item__text">
                      <a href="#" target="_self">
                        <div className="item__link">Cursos</div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav__item-li item__about">
              <a href="/blog" className="nav__text">
                Blog
              </a>
            </li>
          </ul>

          <ul className="nav__item">
            <li className="nav__item-li">
              <button data-baseweb="button" className="item__login">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <title>Person (outlined)</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 6.5c0 3-2.5 5.5-5.5 5.5S6.5 9.5 6.5 6.5 9 1 12 1s5.5 2.5 5.5 5.5zm-3 0C14.5 5.1 13.4 4 12 4S9.5 5.1 9.5 6.5 10.6 9 12 9s2.5-1.1 2.5-2.5zM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3h-3v-3c0-1.7-1.4-3-3-3H9c-1.6 0-3 1.3-3 3v3H3v-3z"
                    fill="currentColor"
                  ></path>
                </svg>
                Log in
              </button>
            </li>

            <li className="nav__item-li item__sign-up">
              <button data-baseweb="button" className=" item__signup">
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
