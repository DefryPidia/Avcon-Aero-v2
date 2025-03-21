"use client";

import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Events = () => {
  const recaptchaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const captchaResponse = recaptchaRef.current.getValue();
    if (!captchaResponse) {
      document.getElementById('captchaError').style.display = 'block';
    } else {
      document.getElementById('captchaError').style.display = 'none';
    }
  }

  return (
    <div>
      <div className="vid-page-title">
        <div className="vid-title">
          <div className="vid-video-mask">
            <video autoPlay muted loop playsInline>
              <source src="video/plane-bg.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="vid-text-box">
            <h1 className="display-1 fw-bolder text-uppercase" style={{fontSize: "calc(1.5rem + 8vw)"}}>Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0">
        <div className="container col-md-9">
          <div className="row align-items-center py-5">
            <div className="col-lg-12">
              <h2 className="display-5 text-primary fw-bold mb-4">LET US HELP YOU</h2>
              <p className="fs-5">
              If you have any questions or concerns about Avcon Aero, please do not hesitate to contact us by filling out <br/>
              the form below. We are dedicated to providing exceptional customer service, and we will be more than <br/>
              happy to assist you and provide you with the information you need.
              </p>
            </div>
          </div>
        </div>

        <div className="container col-md-9">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4 text-primary">GIVE US YOUR <br/> VALUABLE FEEDBACK</h2>
              <p className="mb-4 fs-5">
                We value your feedback and would love to hear <br/>
                about your experience with Avcon Aero. If you <br/>
                have any comments or suggestions, please feel free <br/>
                to send them to our feedback email address:
              </p>
              <p className="mb-5 fs-5">
                Thank you for choosing Aero Supplies Global. We <br/>
                look forward to serving you and providing you with <br/>
                the best products and services in the aviation <br/>
                industry.
              </p>

              <div className="mt-5">
                <h2 className="display-5 fw-bold mb-4 text-primary">CONTACT INFORMATION</h2>
                <h3 className="text-primary mb-2"><i className="fas fa-envelope"></i> contact@avconaero.com</h3>
                <h3 className="text-primary"><i className="fas fa-mobile"></i> +62 818-0740-0663</h3>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label text-muted mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg rounded-4 border-dark" 
                        id="firstName" 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label text-muted mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg rounded-4 border-dark" 
                        id="lastName" 
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label text-muted mb-1">Email</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg rounded-4 border-dark" 
                    id="email" 
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="message" className="form-label text-muted mb-1">Message</label>
                  <textarea 
                    className="form-control form-control-lg rounded-4 border-dark" 
                    id="message" 
                    rows="5"
                  ></textarea>
                </div>

                <div className="form-group mb-4">
                  <label className="text-muted mb-1">Captcha</label>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LcolfsqAAAAAIi9cFTjZZ1v6U9Rws6kDw_-rEBD"
                  />
                </div>
                <div id="captchaError" className="text-danger" style={{ display: 'none' }}>Please complete the captcha.</div>
                <button type="submit" className="btn btn-primary px-4 py-3 fw-semibold rounded-4 col-md-12">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="divider-container position-relative my-5 company-break-line" >
          <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: "12vh", height: "12vh"}}>
            <img src="/image/avcon-logo.png" alt="divider icon" style={{ width: "55%", height: "55%" }} />
          </div>
        </div>
        <br/>
      </div>
    </div>
  )
}

export default Events;