import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="gray_bg section_padding">
            <div className="container">	
              <div className="col-md-12 col-sm-12-col-xs-12">
                <div className="section_heading text-center">
                  <h2>My Portfolio</h2>
                  <p>Electronics Engineer paving my career in Telecommunication as well as Web Development Sector.<br /></p>
                  <div className="sm_border" />
                </div>	
              </div>
              <div className="row">
                <div className="work_filter text-center">
                  <ul>
                    <li className="active" data-filter="*">All</li>
                    <li data-filter=".design">Design</li>
                    <li data-filter=".marketing">Marketing</li>
                    <li data-filter=".Photography">Photography</li>
                  </ul>
                </div>
                <div className="work_content_area">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="item-img">
                      <img src="images/portfolio/1.jpg" alt="" />
                      <div className="item-img-overlay">
                        <div className="overlay-info full-width">
                          <h5>Web Design</h5>
                          <p>Client Project</p>											
                          <a href="images/portfolio/1.jpg" data-lightbox="images">
                            <span className="icon"><i className="fa fa-eye" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12 element-item design Photography">
                    <div className="item-img">
                      <img src="images/portfolio/2.jpg" alt="" />
                      <div className="item-img-overlay">
                        <div className="overlay-info full-width">
                          <h5>Web Template</h5>
                          <p>Responsive Project</p>											
                          <a href="images/portfolio/2.jpg" data-lightbox="images">
                            <span className="icon"><i className="fa fa-eye" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12 element-item Photography marketing">
                    <div className="item-img">
                      <img src="images/portfolio/3.jpg" alt="" />
                      <div className="item-img-overlay">
                        <div className="overlay-info full-width">
                          <h5>Circuit Design</h5>
                          <p>PCB Design</p>											
                          <a href="images/portfolio/3.jpg" data-lightbox="images">
                            <span className="icon"><i className="fa fa-eye" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>						
              </div>
            </div>			
      </section>

    
      </React.Fragment>
    );
  }
}