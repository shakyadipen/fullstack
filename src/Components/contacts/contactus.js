import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact" className="gray_bg section_padding">
          <div className="container">
            <div className="col-md-12 col-sm-12-col-xs-12">
              <div className="section_heading text-center">
                <h2>Contact Us</h2>
                <p>Please Feel Free To contact Me.<br />The contact number  and email address provided above is valid and genuine.</p>
                <div className="sm_border" />
              </div>	
            </div>	
            <div className="row">						
              <div className="col-md-12 col-sm-12">
                <form className="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                  <div className="row">
                    <div className="form-group col-md-4">
                      <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
                    </div>
                    <div className="form-group col-md-4">
                      <input type="email" name="email" className="form-control" placeholder="Email" required="required" />
                    </div>
                    <div className="form-group col-md-4">
                      <input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea rows={6} name="message" className="form-control" placeholder="Your Message" required="required" defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-default main_btn" title="Submit Your Message!">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>						
            </div>
          </div>
      </section>
    
      </React.Fragment>
    );
  }
}