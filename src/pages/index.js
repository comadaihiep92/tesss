import React from "react"
import Layout from "../components/layout"
// import "../js/hero-slider-main"
// import "../js/jquery-1.11.3.min"
// import "../js/bootstrap.min"
// import "../js/jquery.magnific-popup.min"

import $ from "jquery"

export default () => {
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
        prevSlide(slidesWrapper.find(".selected"), slidesWrapper, sliderNav, 0)
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
  return (
    <Layout>
      <div className="clearfix"></div>
      <ul className="cd-hero-slider">
        <li className="selected">
          <div className="">
            <div
              className="container section_contain js-tm-page-content tm-page-1"
              data-page-no="1"
            >
              <div className="row">
                <div className="col-md-5">
                  <div className="backgrou-white">
                    <div className="title">
                      <h2 className="heading_title">
                        {" "}
                        Get in the driver's seat and get paid
                      </h2>
                    </div>
                    <div className="content_blok">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
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
          <div className="cd-full-width">
            <div className="container js-tm-page-content" data-page-no="2">
              <div
                className="cd-bg-video-wrapper"
                data-video="video/red-flower"
              >
                {/* <!-- video element will be loaded using jQuery --> */}
              </div>
              {/* <!-- .cd-bg-video-wrapper --> */}

              <div className="row">
                <div className="col-xs-12">
                  <div className="tm-flex tm-2-col-container-2">
                    <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                      <h2 className="tm-text-title">Lorem ipsum dolor</h2>
                      <p className="tm-text">
                        Nulla efficitur, ligula et imperdiet volutpat, lacus
                        tortor tempus massa, eget tempus quam nibh vel nulla.
                      </p>
                      <p className="tm-text">
                        Vivamus non molestie leo, non tincidunt diam. Mauris
                        sagittis elit in velit ultricies aliquet sed in magna.
                      </p>
                      <p className="tm-text">
                        Pellentesque semper, est nec consequat viverra, sem
                        augue tincidunt nisi, a posuere nisi sapien sed sapien.
                        Nulla facilisi.
                      </p>
                    </div>

                    <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                      <h2 className="tm-text-title">Aliquam sem sem</h2>
                      <p className="tm-text">
                        Proin sagittis mauris dolor, vel efficitur lectus dictum
                        nec. Sed ultrices placerat arcu, id malesuada metus
                        cursus suscipit. Donex quis consectetur ligula. Proin
                        accumsan eros id nisi porttitor, a facilisis quam
                        cursus.
                      </p>
                      <p className="tm-text">
                        Donec vitae bibendum est, et ultrices urna. Curabitur ac
                        bibendum augue, a convallis mi. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Mauris consequat metus hendrerit,
                        tincidunt mi nec, euismod massa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- .cd-full-width --> */}
        </li>

        {/* <!-- Page 3 --> */}
        <li>
          <div className="">
            <div
              className="container section_contain js-tm-page-content tm-page-1"
              data-page-no="1"
            >
              <div className="row">
                <div className="col-md-5">
                  <div className="backgrou-white">
                    <div className="title">
                      <h2 className="heading_title">
                        {" "}
                        Delicious eats, delivered easy
                      </h2>
                    </div>
                    <div className="content_blok">
                      <p>The restaurants you love, delivered to your door.</p>
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
          <div className="cd-full-width">
            <div
              className="container-fluid js-tm-page-content"
              data-page-no="4"
            >
              <div
                className="cd-bg-video-wrapper"
                data-video="video/night-light-blur"
              >
                {/* <!-- video element will be loaded using jQuery --> */}
              </div>
              {/* <!-- .cd-bg-video-wrapper --> */}
            </div>
            {/* <!-- .container-fluid --> */}
          </div>
          {/* <!-- .cd-full-width --> */}
        </li>

        <li>
          <div className="cd-full-width">
            <div
              className="container-fluid js-tm-page-content"
              data-page-no="5"
            >
              <div
                className="cd-bg-video-wrapper"
                data-video="video/padaut-bee"
              >
                {/* <!-- video element will be loaded using jQuery --> */}
              </div>
              {/* <!-- .cd-bg-video-wrapper --> */}

              <div className="row">
                <div className="col-xs-12">
                  <div className="tm-flex tm-3-col-container">
                    <div className="tm-3-col-textbox tm-bg-white-translucent">
                      <div className="text-xs-left tm-textbox tm-textbox-padding">
                        <h2 className="tm-text-title">Testimonial One</h2>
                        <p className="tm-text">
                          Etiam vitae imperdiet magna. Vestibulum blandit
                          vehicula metus, ac ornare eros elementum et.
                          Pellentesque habitant morbi tristique senectus et ntus
                          et malesuada fames ac turpis egestas.
                        </p>

                        <p className="tm-text">
                          Mauris lobortis lorem nulla, non tristique enim
                          sollicitudin eu. Praesent tempus dapibus odio nec
                          elementum.
                        </p>
                      </div>
                    </div>

                    <div className="tm-3-col-textbox tm-bg-white-translucent">
                      <div className="text-xs-left tm-textbox tm-textbox-padding">
                        <h2 className="tm-text-title">Testimonial Two</h2>

                        <p className="tm-text">
                          Curabitur sodales, est auctor congue vulputate, nisl
                          tellus finibus nunc, vitae consectetur enim erat vitae
                          quam.
                        </p>

                        <p className="tm-text">
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Nunc vitae
                          tempor turpis.
                        </p>
                      </div>
                    </div>

                    <div className="tm-3-col-textbox tm-bg-white-translucent">
                      <div className="text-xs-left tm-textbox tm-textbox-padding">
                        <h2 className="tm-text-title">Testimonial Three</h2>

                        <p className="tm-text">
                          Mauris lobortis lorem nulla, non tristique enim
                          sollicitudin eu. Praesent tempus dapibus odio nec
                          elementum.
                        </p>

                        <p className="tm-text">
                          Sed elementum est quis tortor faucibus, et molestie
                          nibh finibus. Mauris condimentum ex vestibulum
                          fringilla consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="cd-full-width">
            <div
              className="container-fluid js-tm-page-content"
              data-page-no="6"
            >
              <div
                className="cd-bg-video-wrapper"
                data-video="video/sunset-loop"
              >
                {/* <!-- video element will be loaded using jQuery --> */}
              </div>
              {/* <!-- .cd-bg-video-wrapper --> */}

              <div className="tm-contact-page">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="tm-flex tm-contact-container">
                      <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                        <p className="tm-text">
                          Praesent tempus dapibus odio nec elementum. Sed
                          elementum est quis tortor faucibus, et molestie nibh
                          finibus. Mauris condimentum ex vestibulum fringilla
                          consectetur.
                        </p>

                        {/* <!-- contact form --> */}
                        <form
                          action="http://greentaurus.in/two_page/index.html"
                          method="post"
                          className="tm-contact-form"
                        >
                          <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                            <input
                              type="text"
                              id="contact_name"
                              name="contact_name"
                              className="form-control"
                              placeholder="Name"
                              required
                            />
                          </div>

                          <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-right">
                            <input
                              type="email"
                              id="contact_email"
                              name="contact_email"
                              className="form-control"
                              placeholder="Email"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              id="contact_subject"
                              name="contact_subject"
                              className="form-control"
                              placeholder="Subject"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <textarea
                              id="contact_message"
                              name="contact_message"
                              className="form-control"
                              rows="5"
                              placeholder="Your message"
                              required
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            className="pull-xs-right tm-submit-btn"
                          >
                            Send
                          </button>
                        </form>
                      </div>

                      <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                        <h2 className="tm-contact-info">
                          123 New Street 11000, San Francisco, CA
                        </h2>
                        {/* <!-- google map goes here --> */}
                        <div id="google-map"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  <!-- .cd-full-width --> */}
        </li>
      </ul>
      {/*  <!-- .cd-hero-slider --> */}
    </Layout>
  )
}
