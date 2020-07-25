import React from 'react'

const Navigation = () => {
    return (
        <header className="page-header header-sticky">
  <nav className="navbar" id="slide-nav">
    <div className="container">
      <div className="header-row">
        <div className="logo">
          <h2 className="title">Rene's Tire Shop</h2>
        </div>
        <div className="header-right">
          <button type="button" className="navbar-toggle"><i className="icon icon-lines-menu" /></button>
          <div className="header-right-top">
            <div className="address">
              Monday-Saturday <span className="custom-color">9:00AM - 5:00PM</span>
            </div>
            <span href="#" className="appointment" data-target="#appointmentForm" />
          </div>
          <div className="header-right-bottom">
            <div className="header-phone"><span className="text">SCHEDULE YOUR APPOINTMENT TODAY</span><span className="phone-number">(951)436-1445</span>
            </div>
          </div>
        </div>
      </div>
      <div id="slidemenu">
        <div className="row">
          <div className="col-md-11">
            <div className="close-menu"><i className="icon-close-cross" /></div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#top"><span>Home</span></a></li>
              <li><a href="#aboutUs"><span>About Us</span></a></li>
              <li className="dropdown">
                <a href="#" data-toggle="dropdown" data-submenu><span>Services</span><span className="ecaret" /></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#serviceOne">Preventative Maintenance</a></li>
                  <li><a href="#serviceTwo">Tires &amp; Wheels</a></li>
                </ul>
              </li>
              <li><a href="#contactUs"><span>Contact Us</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

    )
}

export default Navigation
