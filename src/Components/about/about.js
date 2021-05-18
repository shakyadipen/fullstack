import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="gray_bg section_padding">
          <div className="container">
            <div className="single_about">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="about_image">
                    <img src="images/about.jpg" alt="about-image" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="about_content_area">
                    <h4>Hello, I am Dipendra Shakya</h4>					
                    <p>I am a technology enthusiast.
                    </p>
                    <div className="about_details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="ct_about">
                            <span> Name </span> : Dipendra Shakya											   
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="ct_about">
                            <span> Age </span>
                            : 25
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="ct_about">
                            <span> Address </span>
                            : Chainpur, Sankhuwasava
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="ct_about">
                            <span> Phone Number </span>
                            : 9849594238
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="ct_about">
                            <span> Email </span>
                            : shakyadipen@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="btn btn-default main_btn">Download Cv</a>
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