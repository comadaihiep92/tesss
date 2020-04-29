import React from "react"
import Layout3 from "../components/layout3"

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
  }

  render() {
    return (
      <Layout3>
        <div className="clearfix"></div>
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
