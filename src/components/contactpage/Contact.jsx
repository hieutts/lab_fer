import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Contact() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
   <div style={{backgroundColor: theme.backgroundColorOut}}>
        <div className="  row" style={{
            marginLeft: '90px', 
            marginRight: '90px',
            color: theme.color,
            // minHeight: '80vh'
            // backgroundColor: theme.backgroundColor
        }}>
          <div className="col-sm-7 flex row py-4">
            <img
              src="https://futabus.vn/images/icons/mail_send.svg"
              alt=""
              className="col-sm-2" style={{width: '70px'}}
            />
            <div className="title fw-bolder col-sm-10 fs-3 pt-3">
              Send contact information to us 
            </div>
            <div>
              <form className="">
                <div className="form-group row">
                  <label for="firstname" className="col-md-2 col-form-label">
                    Your Name
                  </label>
                  <div className="col-md-10">
                    <input
                    // style={{backgroundColor: theme.backgroundColorItem, color: theme.color}}
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                    />
                  </div>
                </div>
              </form>
    
              <div className="form-group row">
                <label for="telnum" className="col-12 col-md-2 col-form-label">
                  Contact Tel.
                </label>
                <div className="col-5 col-md-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="areacode"
                    name="areacode"
                    placeholder="Area code"
                  />
                </div>
                <div className="col-7 col-md-7">
                  <input
                    type="tel"
                    className="form-control"
                    id="tFelnum"
                    name="telnum"
                    placeholder="Tel. number"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="emailid" className="col-md-2 col-form-label">
                  Email
                </label>
                <div className="col-md-10">
                  <input
                    type="email"
                    className="form-control"
                    id="emailid"
                    name="emailid"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 offset-md-2">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="approve"
                      id="approve"
                      value=""
                    />
                    <label className="form-check-label" for="approve">
                      <strong>May we contact you?</strong>
                    </label>
                  </div>
                </div>
                <div className="col-md-3 offset-md-1">
                  <select className="form-control">
                    <option>Tel.</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="feedback" className="col-md-2 col-form-label">
                  Your Feedback
                </label>
                <div className="col-md-10">
                  <textarea
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row flex justify-content-center">
                <div className="offset-md-2 col-md-10">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
         <div className='py-3 '>
              <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.406547060775!2d106.76315717481917!3d10.856651157709255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279c1c76ca5f%3A0x48b7adcb4aa13e58!2zMTAzIMSQLiBIb8OgbmcgRGnhu4d1IDIsIFBoxrDhu51uZyBMaW5oIFRydW5gLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1697784640590!5m2!1sen!2s"
              width="500"
              height="450"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
          </div>
        </div>
        <div style={{height: '150px'}}></div>
   </div>
  );
}
