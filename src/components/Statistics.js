import React from 'react'

export const Statistics = () => {
    return (

      <div className="block">
        <div id="aboutUs" className="container">
          <h2 className="h-lg text-center"><span className="color">About Us</span></h2>
          <p className="info text-center">Tire Repair Technical Statistics You Must Know</p>
          <div className="row" id="counterBlock">
            <div className="col-sm-3 col-md-3">
              <div className="stat-box">
                <div><span className="number"><span className="count" data-to={10} data-speed={1000}>10</span></span><span className="icon"><i className="icon-rocket" /></span></div>
                <div className="text">
                  <h5>Years of experience</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3">
              <div className="stat-box">
                <div><span className="number"><span className="count" data-to={32} data-speed={1000}>32</span></span><span className="icon"><i className="icon-people-2" /></span></div>
                <div className="text">
                  <h5>Family Operated</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3">
              <div className="stat-box">
                <div><span className="number"><span className="count" data-to={2500} data-speed={1000}>2500</span></span><span className="icon"><i className="icon-people" /></span></div>
                <div className="text">
                  <h5>Satisfied customers</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3">
              <div className="stat-box">
                <div className="plus">+<span className="number"><span className="count" data-to={1000} data-speed={1000}>1000</span></span><span className="icon"><i className="icon-transport" /></span></div>
                <div className="text">
                  <h5>Tires Repaired</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

export default Statistics