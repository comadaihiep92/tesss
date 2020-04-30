import React from "react"
import Layout3 from "../components/layout3"

import "../components/navigation.css"
import "../components/hero-slider-style.css"
import "../components/magnific-popup.css"
import "../components/templatemo-style.css"

import cloud from "../img/cloud.svg"
import ecommerce from "../img/ecommerce.svg"
import email from "../img/email.svg"
import podcast from "../img/podcast.svg"
import sites from "../img/sites.svg"
import video from "../img/video.svg"
import cursos from "../img/cursos.svg"
import $ from "jquery"

export default class App extends React.Component {
  componentDidMount() {
    $(document).ready(function($) {
      var slidesWrapper = $(".cd-hero-slider")

      //check if a .cd-hero-slider exists in the DOM
      if (slidesWrapper.length > 0) {
        var primaryNav = $(".cd-primary-nav"),
          sliderNav = $(".cd-slider-nav"),
          navigationMarker = $(".cd-marker"),
          slidesNumber = slidesWrapper.children("li").length,
          visibleSlidePosition = 0,
          autoPlayId,
          autoPlayDelay = 5000

        //upload videos (if not on mobile devices)
        uploadVideo(slidesWrapper)

        //autoplay slider
        setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay)

        //on mobile - open/close primary navigation clicking/tapping the menu icon
        primaryNav.on("click", function(event) {
          if ($(event.target).is(".cd-primary-nav"))
            $(this)
              .children("ul")
              .toggleClass("is-visible")
        })

        //change visible slide
        sliderNav.on("click", "li", function(event) {
          event.preventDefault()
          var selectedItem = $(this)
          if (!selectedItem.hasClass("selected")) {
            // if it's not already selected
            var selectedPosition = selectedItem.index(),
              activePosition = slidesWrapper.find("li.selected").index()

            if (activePosition < selectedPosition) {
              nextSlide(
                slidesWrapper.find(".selected"),
                slidesWrapper,
                sliderNav,
                selectedPosition
              )
            } else {
              prevSlide(
                slidesWrapper.find(".selected"),
                slidesWrapper,
                sliderNav,
                selectedPosition
              )
            }

            //this is used for the autoplay
            visibleSlidePosition = selectedPosition

            updateSliderNavigation(sliderNav, selectedPosition)
            updateNavigationMarker(navigationMarker, selectedPosition + 1)
            //reset autoplay
            setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay)
          }
        })
      }

      function nextSlide(visibleSlide, container, pagination, n) {
        visibleSlide
          .removeClass("selected from-left from-right")
          .addClass("is-moving")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function() {
              visibleSlide.removeClass("is-moving")
            }
          )

        container
          .children("li")
          .eq(n)
          .addClass("selected from-right")
          .prevAll()
          .addClass("move-left")
        checkVideo(visibleSlide, container, n)
      }

      function prevSlide(visibleSlide, container, pagination, n) {
        visibleSlide
          .removeClass("selected from-left from-right")
          .addClass("is-moving")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function() {
              visibleSlide.removeClass("is-moving")
            }
          )

        container
          .children("li")
          .eq(n)
          .addClass("selected from-left")
          .removeClass("move-left")
          .nextAll()
          .removeClass("move-left")
        checkVideo(visibleSlide, container, n)
      }

      function updateSliderNavigation(pagination, n) {
        var navigationDot = pagination.find(".selected")
        navigationDot.removeClass("selected")
        pagination
          .find("li")
          .eq(n)
          .addClass("selected")
      }

      function setAutoplay(wrapper, length, delay) {
        if (wrapper.hasClass("autoplay")) {
          clearInterval(autoPlayId)
          autoPlayId = window.setInterval(function() {
            autoplaySlider(length)
          }, delay)
        }
      }

      function autoplaySlider(length) {
        if (visibleSlidePosition < length - 1) {
          nextSlide(
            slidesWrapper.find(".selected"),
            slidesWrapper,
            sliderNav,
            visibleSlidePosition + 1
          )
          visibleSlidePosition += 1
        } else {
          prevSlide(
            slidesWrapper.find(".selected"),
            slidesWrapper,
            sliderNav,
            0
          )
          visibleSlidePosition = 0
        }
        updateNavigationMarker(navigationMarker, visibleSlidePosition + 1)
        updateSliderNavigation(sliderNav, visibleSlidePosition)
      }

      function uploadVideo(container) {
        var i = 0
        container.find(".cd-bg-video-wrapper").each(function() {
          var videoWrapper = $(this)
          if (videoWrapper.is(":visible")) {
            // if visible - we are not on a mobile device
            var videoUrl = videoWrapper.data("video"),
              video = $(
                '<video loop><source src="' +
                  videoUrl +
                  '.mp4" type="video/mp4" /></video>'
              )

            if (i === 0) {
              video = $(
                '<video autoplay loop><source src="' +
                  videoUrl +
                  '.mp4" type="video/mp4" /></video>'
              )
            }

            video.appendTo(videoWrapper)

            // play video if first slide
            if (videoWrapper.parent(".cd-bg-video.selected").length > 0)
              video.get(0).play()

            i++
          }
        })
      }

      function checkVideo(hiddenSlide, container, n) {
        //check if a video outside the viewport is playing - if yes, pause it
        var hiddenVideo = hiddenSlide.find("video")
        if (hiddenVideo.length > 0) hiddenVideo.get(0).pause()

        //check if the select slide contains a video element - if yes, play the video
        var visibleVideo = container
          .children("li")
          .eq(n)
          .find("video")
        if (visibleVideo.length > 0) visibleVideo.get(0).play()
      }

      function updateNavigationMarker(marker, n) {
        marker.removeClassPrefix("item").addClass("item-" + n)
      }

      $.fn.removeClassPrefix = function(prefix) {
        //remove all classes starting with 'prefix'
        this.each(function(i, el) {
          var classes = el.className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0
          })
          el.className = $.trim(classes.join(" "))
        })
        return this
      }
    })

    // ok
  }

  render() {
    return (
      <Layout3>
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
                          width="30"
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
                          width="30"
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
                          width="30"
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
                          width="30"
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
                          width="30"
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
                          width="30"
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
                          width="30"
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
        <ul className="cd-hero-slider">
          <li className="selected">
            <div className="">
              <div
                className="container section_contain js-tm-page-content tm-page-1"
                data-page-no="1"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="backgrou-white">
                      <div className="title">
                        <h2 className="heading_title">
                          {" "}
                          Melhores hospedagem na nuvem
                        </h2>
                      </div>
                      <div className="content_blok">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                      <div className="button_block">
                        <button className="btn btn-black">Saiba mais</button>
                      </div>
                      <div className="link_block_main">
                        {/* <!-- <a href="#" className="link_block">
												Learn more about driving and delivering.
											</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="">
              <div
                className="container section_contain js-tm-page-content tm-page-1"
                data-page-no="2"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="backgrou-white">
                      <div className="title">
                        <h2 className="heading_title">
                          {" "}
                          Melhores plataformas de eCommerce
                        </h2>
                      </div>
                      <div className="content_blok">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                      <div className="button_block">
                        <button className="btn btn-black">Saiba mais</button>
                      </div>
                      <div className="link_block_main">
                        {/* <!-- <a href="#" className="link_block">
												Learn more about driving and delivering.
											</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </li>

          {/* <!-- Page 3 --> */}
          <li>
            <div className="">
              <div
                className="container section_contain js-tm-page-content tm-page-1"
                data-page-no="1"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="backgrou-white">
                      <div className="title">
                        <h2 className="heading_title">
                          {" "}
                          Melhores ferramentas de email marketing
                        </h2>
                      </div>
                      <div className="content_blok">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                      <div className="button_block">
                        <button className="btn btn-black">Order now</button>
                      </div>
                      <div className="link_block_main">
                        <a href="#" className="link_block">
                          Lorem Ipsum is simply dummy text of the printing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </li>

          {/* <!-- Page 4 --> */}
          <li>
            <div className="">
              <div
                className="container section_contain js-tm-page-content tm-page-1"
                data-page-no="4"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="backgrou-white">
                      <div className="title">
                        <h2 className="heading_title">
                          {" "}
                          Melhores sites para hospedar podcasts
                        </h2>
                      </div>
                      <div className="content_blok">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                      <div className="button_block">
                        <button className="btn btn-black">Saiba mais</button>
                      </div>
                      <div className="link_block_main">
                        {/* <!-- <a href="#" className="link_block">
												Learn more about driving and delivering.
											</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="">
              <div
                className="container section_contain js-tm-page-content tm-page-1"
                data-page-no="5"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="backgrou-white">
                      <div className="title">
                        <h2 className="heading_title">
                          {" "}
                          Melhores hospedagem de sites
                        </h2>
                      </div>
                      <div className="content_blok">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                      <div className="button_block">
                        <button className="btn btn-black">Saiba mais</button>
                      </div>
                      <div className="link_block_main">
                        {/* <!-- <a href="#" className="link_block">
												Learn more about driving and delivering.
											</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="">
              <div
                className="container section_contain js-tm-page-content tm-page-1"
                data-page-no="6"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="backgrou-white">
                      <div className="title">
                        <h2 className="heading_title">
                          {" "}
                          Como criar cursos online (plataformas, metodologias)
                        </h2>
                      </div>
                      <div className="content_blok">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                      <div className="button_block">
                        <button className="btn btn-black">Saiba mais</button>
                      </div>
                      <div className="link_block_main">
                        {/* <!-- <a href="#" className="link_block">
												Learn more about driving and delivering.
											</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="">
              <div
                className="container section_contain js-tm-page-content tm-page-1"
                data-page-no="7"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="backgrou-white">
                      <div className="title">
                        <h2 className="heading_title">
                          {" "}
                          Melhores plataformas para hospedar videos
                        </h2>
                      </div>
                      <div className="content_blok">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                      <div className="button_block">
                        <button className="btn btn-black">Saiba mais</button>
                      </div>
                      <div className="link_block_main">
                        {/* <!-- <a href="#" className="link_block">
												Learn more about driving and delivering.
											</a> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* <!-- .cd-hero-slider --> */}
      </Layout3>
    )
  }
}
