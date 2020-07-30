import React from 'react';



const Slider = ({
    title: ThisIsTitle,
    imageOne
}) => {

    console.log()

    return (
        <div id="mainSliderWrapper">
  <div id="mainSlider">
    <div className="slide">
      <div className="img--holder" style={imageOne} />
      <div className="slide-content center">
        <div className="vert-wrap container">
          <div className="vert">
            <div className="container">
              <h4 data-animation="zoomIn" data-animation-delay="0.5s">Looking for the Best</h4>
              <h3 data-animation="scaleOut" data-animation-delay="0.2s">{ThisIsTitle}</h3>
              <p className="hidden-xs" data-animation="fadeIn" data-animation-delay="0.9s">Get your fair-price repair estimates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="img--holder" style={{backgroundImage: 'url(images/rene1.jpg)'}} />
      <div className="slide-content container left">
        <div className="vert-wrap">
          <div className="vert">
            <div className="container">
              <h4 data-animation="fadeInLeft" data-animation-delay="0.2s">Full Service of</h4>
              <h3 data-animation="flipInX" data-animation-delay="0.8s">Auto Repair</h3>
              <h3 data-animation="flipInX" data-animation-delay="1.2s">&amp; Maintenance</h3>
              <p className="hidden-xs" data-animation="fadeIn" data-animation-delay="1.5s">Over 35 Years Of Quality Auto Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="img--holder" style={{backgroundImage: 'url(images/slider/slide3.jpg)'}} />
      <div className="slide-content container center">
        <div className="vert-wrap">
          <div className="vert">
            <div className="container">
              <h4 data-animation="zoomIn" data-animation-delay="0.8s">Trust Your Vehicle to</h4>
              <h3 data-animation="fadeInUp" data-animation-delay="0.2s">Certified</h3>
              <h3 data-animation="fadeInUp" data-animation-delay="0.5s">Technicians</h3>
              <p className="hidden-xs" data-animation="fadeIn" data-animation-delay="1.2s">SERVICE, MAINTENANCE &amp; REPAIR BY THE CERTIFIED SERVICE EXPERTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}


export default Slider
