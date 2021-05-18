import React, { Component } from 'react';
export default class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="service" className="gray_bg section_padding">
                <div className="container">
                <div className="col-md-12 col-sm-12-col-xs-12">
                    <div className="section_heading text-center">
                    <h2>My Services</h2>
                    <p>I provide Services related to Digital Marketing,Create Responsive Websites..<br />I also create PCB(Printed Circuit Boards) designs and help students tinker in technology.</p>
                    <div className="sm_border" />
                    </div>	
                </div>
                <div className="row text-center">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="single-service">
                        <i className="fa fa-github" />
                        <h4>Web Development</h4>
                        <p>Provide Clean,Responsive Web Sites at affordable Price.</p>
                    </div>
                    </div> {/* End Col */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="single-service">
                        <i className="fa fa-microchip" />
                        <h4>Tinkerer</h4>
                        <p>Support and help in designing protype of electronics simulation .Also provide guidance in circuit designing.</p>
                    </div>
                    </div> {/* End Col */}						
                    <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="single-service">
                        <i className="fa fa-codepen" />
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.</p>
                    </div>
                    </div> {/* End Col */}
                    
                </div>
                </div>
        </section>
      
      </React.Fragment>
    );
  }
}