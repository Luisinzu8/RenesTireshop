import React from'react'

export const Footer = () => {
    return (
      <div>
        <div id="contactUs" className="page-footer">
          <div className="footer-content">
            <div className="footer-col-left">
              <div className="inside">
                <div className="footer-phone">
                  <h2 className="h-phone">Call: <span className="number">(951)436-1445</span></h2>
                </div>
                <div className="contact-info"><i className="icon icon-locate" />130 W. Walnut Ave. Perris, CA 92571
                </div>
                <div className="contact-info"><i className="icon icon-clock" />Monday-Saturday <span className="color">9:00AM - 5:00PM</span> Sunday Closed
                </div>
                {/* <div class="contact-info"><i class="icon icon-email"></i><a href="mailto:officeone@youremail.com">officeone@youremail.com</a> */}
                <div className="social-links">
                  <ul>
                    <li>
                      {/* <a class="icon icon-facebook-logo" href="#"></a> */}
                    </li>
                    <li>
                      {/* <a class="icon icon-twitter-logo" href="#"></a> */}
                    </li>
                    <li>
                      <a className="icon icon-instagram-logo" href="https://www.instagram.com/renestires/" />
                    </li>
                    <li>
                      {/* <a class="icon icon-google-plus-logo" href="#"></a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-col-right">
              <div id="footer-map" className="footer-map" />
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="copyright">© 2020 Rene's Tires, <span className="clearfix visible-xs" />All Rights Reserved</div>
              <div className="footer-bottom-right hidden-xs"><a href="#">Privacy Policy</a></div>
            </div>
          </div>
        </div>
        <div className="back-to-top"><a href="#top"><span className="icon icon-arrow_up" /></a></div>
      </div>
    )
};

export default Footer