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
            <h1 className="display-1 fw-bolder text-uppercase" style={{fontSize: "calc(3.5rem + 9vw)"}}>Events</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0">
        <div className="container col-md-9">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">Lorem Ipsum</h2>
              <p className="fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="https://picsum.photos/600/400?random=1" alt="Event Image" className="img-fluid rounded-5 shadow"/>
            </div>
          </div>
        </div>

        <div className="bg-secondary break-line my-5"/>

        <div className="container col-md-9">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">Lorem Ipsum</h2>
              <p className="fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="https://picsum.photos/600/400?random=2" alt="Event Image" className="img-fluid rounded-5 shadow"/>
            </div>
          </div>
        </div>

        <div className="bg-secondary break-line my-5"/>

        <div className="container col-md-9">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">Lorem Ipsum</h2>
              <p className="fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="https://picsum.photos/600/400?random=3" alt="Event Image" className="img-fluid rounded-5 shadow"/>
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