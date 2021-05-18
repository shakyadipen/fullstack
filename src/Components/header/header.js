import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
       <div className="navbar navbar-default navbar-fixed-top menu-top">
          <div className="container">
            <div className="logo">
              <a href="index.html" className="navbar-brand"><p>Shakya</p></a>
              <div className="mobile-nav" />
            </div>
            <div id="navbar" className="main_menu">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>																				
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div> 
          </div>
        </div>
        <section id="home" className="main_banner banner_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="banner_content">
                  <strong>Welcome To My Website</strong>
                  <h1 className="cd-headline clip">									
                    <span className="cd-words-wrapper">
                      <b className="is-visible fw_300">Dipendra Shakya</b>
                      <b className="fw_300">Web Designer</b>
                      <b className="fw_300">Electronics Enthusiast</b>
                      <b className="fw_300">Web Developer</b>
                    </span>
                  </h1>
                  <a href="#" className="banner_btn">Hire Me</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}