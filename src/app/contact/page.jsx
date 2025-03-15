const Events = () => {
  return (
    <div>
      <div className="vid-page-title">
        <div className="vid-title">
          <div className="vid-video-mask">
            <video autoPlay muted loop playsInline>
              <source src="https://videos.pond5.com/colorful-aurora-borealisnorthern-lights-over-footage-102590823_main_xxl.mp4" type="video/mp4" />
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
              <h2 className="display-5 text-danger fw-bold mb-4">Let us help you</h2>
              <p className="fw-bold fs-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary break-line my-5"/>

        <div className="container col-md-9">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4 text-danger">Give us your valuable feedback</h2>
              <p className="fw-bold mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="fw-bold mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua
              </p>

              <div className="mt-5">
                <h3 className="fw-bold my-3">Contact Information:</h3>
                <h3 className="fw-bold mb-2">demo@email.com</h3>
                <h3 className="fw-bold">+123456789</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <form>
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

                <button type="submit" className="btn btn-danger px-4 py-3 fw-semibold rounded-4 col-md-12">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="divider-container position-relative my-5 company-break-line" >
          <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle shadow">
            <img src="https://picsum.photos/30/30" alt="divider icon"className="rounded-circle vh-8 vw-8"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events;