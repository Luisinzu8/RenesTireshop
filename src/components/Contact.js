import React from'react'

export const Contact = () => {
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
          </div>
        </div>
      </div>
    )
  };

export default Contact;