import React from 'react';


export const Services = () => {
  return(
    <div>
        {/* Services Banner Block */}
        <div className="block">
          <div id="serviceTwo" className="container">
            <div className="text-center">
              <div className="header-info-mobile">
                <div className>
                  <p><i className="icon icon-locate" /><a href="https://goo.gl/maps/nszHrtNd88KknHWFA">130 W. Walnut Ave. Perris, CA 92571</a></p>
                  <p><i className="icon icon-phone" /><a href="tel:(951)436-1445">(951)436-1445</a></p>
                  <p><i className="icon icon-clock" />Mon - Sat: 9:00 am – 5:00 pm</p>
                  <p><i className="icon icon-email" /><a href="mailto:officeone@youremail.com">officeone@youremail.com</a></p>
                </div>
              </div>
              <hr />
              <div id="react-container" />
              <div id="like_button_container" />
              <hr />
              <h2 className="h-lg">What We Do</h2>
              <p className="info">We offer full tire repair &amp; maintenance</p>
            </div>
            <div className="services-block services-carousel hidden-xs">
              <div id="serviceOne" className="service">
                <div className="image"><img src="images/service-1-bg.png" alt="#" /></div>
                <div className="caption">
                  <div className="vert-wrap">
                    <div className="vert">
                      <h3>Preventative</h3>
                      <h2>Maintenance</h2>
                      <div className="text">The best way to minimize breakdowns is doing routine maintenance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="#" className="image image-scale"><img src="images/rene4.jpg" alt="#" /></a>
              </div>
              <div className="service">
                <div className="image"><img src="images/service-3-bg.jpg" alt="#" /></div>
                <div className="caption">
                  <div className="vert-wrap">
                    <div className="vert">
                      <h3>Common</h3>
                      <h2>Repairs</h2>
                      <div className="text">We have over 30 common car
                        <br />repairs and the list is growing</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service">
                <a href="#" className="image image-scale"><img src="images/rene5.jpg" alt="#" /></a>
              </div>
              <div className="service dark">
                <div className="image"><img src="images/service-5-bg.jpg" alt="#" /></div>
                <div className="caption">
                  <div className="vert-wrap">
                    <div className="vert">
                      <h3>Tire</h3>
                      <h2>Repair &amp; Service</h2>
                      <div className="text">Tire maintenance is important
                        <br /> in helping ensure the safety of you
                        <br /> and your passengers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service dark">
                <a href="#" className="image image-scale"><img src="images/rene3.jpg" alt="#" /></a>
              </div>
            </div>
            <div className="services-block services-carousel visible-xs">
              <div className="service dark">
                <div className="image"><img src="images/rene4.jpg" alt="#" /></div>
                <div className="caption">
                  <div className="vert-wrap">
                    <div className="vert">
                      <h3>Preventative</h3>
                      <h2>Maintenance</h2>
                      <div className="text">The best way to minimize breakdowns is doing routine maintenance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service dark">
                <div className="image"><img src="images/rene5.jpg" alt="#" /></div>
                <div className="caption">
                  <div className="vert-wrap">
                    <div className="vert">
                      <h3>Common</h3>
                      <h2>Repairs</h2>
                      <div className="text">We have over 30 common car
                        <br />repairsand the list is growing</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service dark">
                <div className="image"><img src="images/rene3.jpg" alt="#" /></div>
                <div className="caption">
                  <div className="vert-wrap">
                    <div className="vert">
                      <h3>Tire</h3>
                      <h2>Repair &amp; Service</h2>
                      <div className="text">Tire maintenance is important
                        <br /> in helping ensure the safety of you
                        <br /> and your passengers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Services Banner Block */}
        {/* Services List Block */}
        <div className="block bg-1">
          <div className="container">
            <h2 className="h-lg text-center">Our <span className="color">Services</span></h2>
            <p className="info text-center">Below are some of the many auto repair services we offer:</p>
            <div className="row" id="slideMobile">
              <div className="col-sm-6 col-md-4">
                <ul className="marker-list">
                  <li>General Auto Repair &amp; Maintenance</li>
                  <li>Transmission Repair &amp; Replacement</li>
                  <li>Manufacturer Recommended Service</li>
                  <li>Brake Repair and Replacement</li>
                  <li>Tire Repair and Replacement</li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 view-more-mobile">
                <ul className="marker-list">
                  <li>Wheel Alignment</li>
                  <li>CV Axles</li>
                  <li>Computer Diagnostic Testing
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-4 view-more-mobile view-more-tablet">
                <ul className="marker-list">
                  <li>Vehicle Preventative Maintenance</li>
                  <li>State Emissions Inspection</li>
                  <li>Emission Repair Facility</li>
                  <li>Tune Up</li>
                  <li>Steering and Suspension Work</li>
                </ul>
              </div>
            </div>
            <div className="text-center"><a href="#slideMobile" className="view-more-link color"><span className="more">All Services</span><span className="less">Hide All Services</span></a>
            </div>
          </div>
        </div>
        {/* //Services List Block */}
        {/* Services Block */}
        <div className="block">
          <div className="container">
            <h2 className="h-lg text-center">Why Choose Certified Service?</h2>
            <p className="info text-center">We partnered with RepairPal to bring you the most sophisticated fair-price estimates </p>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="text-icon">
                  <div className="icon-wrapper"><span><i className="icon icon-technology" /><span className="icon-hover" /></span>
                  </div>
                  <h3 className="title">Estimates</h3>
                  <p className="text">We bring you the most accurate and fair-price service estimates</p>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="text-icon">
                  <div className="icon-wrapper"><span><i className="icon icon-tool" /><span className="icon-hover" /></span>
                  </div>
                  <h3 className="title">Trusted</h3>
                  <p className="text">Trusted Service Centers
                    <br /> are certified for high quality
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="text-icon">
                  <div className="icon-wrapper"><span><i className="icon icon-diploma" /><span className="icon-hover" /></span>
                  </div>
                  <h3 className="title">Guarantees</h3>
                  <p className="text">Covers parts and labor on qualifying repairs and services for
                    <br />24 months/24,000 miles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Services Block */}
      </div>
    )
};

export default Services;
      