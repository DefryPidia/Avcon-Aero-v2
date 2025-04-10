export default function Home() {
  return (
    <>
      <div className="position-relative overflow-hidden home-section" 
        style={{ backgroundImage: `url("/image/main-page-background.webp")`, backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 0 }}></div>
        {/* <video className="position-absolute top-0 start-0 h-100 w-100 object-fit-cover" autoPlay muted loop playsInline>
          <source src="https://video.wixstatic.com/video/9b43b8_f183b01216004f618c8724974c137e9b/720p/mp4/file.mp4" type="video/mp4" />
        </video> */}
        <div className="container h-100 position-relative overflow-x-hidden" style={{ zIndex: 1 }}>
          <div className="row h-100 align-items-center">
            <div className="col-lg-12 text-start">
              <img src="/image/Avcon-Aero-2-1.png" data-aos="slide-right" data-aos-duration="1000"/>
              <h1 className="display-1 fw-bold mb-4 text-light position-relative"  data-aos="slide-right" data-aos-duration="1500">
                KEEP YOU<br/>
                BUSTLING IN THE SKY
              </h1>
              <a href="" className="btn btn-primary btn-lg px-5 py-3 fs-5 fw-bold btn-aero" data-aos="slide-right" data-aos-duration="2500" >Request Quote</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-relative overflow-hidden home-section"
        style={{
          backgroundImage: `url("/image/avcon-aero-background.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="position-absolute top-50 end-25 translate-middle-y" style={{ right: "calc(30% - 50vh)", width: "70vh", height: "50vh" }}>
          <div className="position-relative h-100 w-100">
            <img
              src="/image/Asset-Avcon-frame-2.svg"
              alt="Aviation Services"
              className="position-absolute h-100 w-100 object-fit-cover"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>
        </div>

        <div className="container h-100">
          <div className="row h-100 align-items-center ps-3">
            <div className="col-lg-8 text-start" data-aos="slide-down" data-aos-duration="1000">
              <h1 className=" fw-bold mb-4 text-danger position-relative ps-3">
                KNOW US BETTER
              </h1>
              <h1 className="display-4 fw-bold mb-4 text-primary position-relative ps-3">
                LEADING THE SKY WITH <br/>
                GLOBAL AVIATION <br/>
                SOLUTIONS
              </h1>
              <a href="/about-us" className="btn btn-primary btn-lg ms-3 px-5 py-3 fs-5 fw-bold btn-aero" >Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="fleet-support overflow-hidden py-5" >
        <div className="position-relative container">
          <div className="mb-5">
            <h2 className="fw-bold text-danger">OUR FLEET SUPPORT</h2>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company1.png"
                    alt="Partner Logo 1"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company2.png"
                    alt="Partner Logo 2"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company3.png"
                    alt="Partner Logo 3"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company4.png"
                    alt="Partner Logo 4"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company5.png"
                    alt="Partner Logo 1"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company6.png"
                    alt="Partner Logo 2"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company7.png"
                    alt="Partner Logo 3"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company8.png"
                    alt="Partner Logo 4"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company9.png"
                    alt="Partner Logo 1"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company10.png"
                    alt="Partner Logo 2"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company11.png"
                    alt="Partner Logo 2"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company12.png"
                    alt="Partner Logo 2"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company13.png"
                    alt="Partner Logo 2"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3" data-aos="fade-in" data-aos-duration="2000">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-center p-4" style={{ height: "20vh" }}>
                  <img
                    src="/image/company14.png"
                    alt="Partner Logo 2"
                    className="img-fluid fleet-support-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden", background: "#F4F9FF" }} >
        <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, }} >
          <video autoPlay loop muted playsInline className="curved-video">
            <source src="/video/turbine-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            <br/>
          </video>
        </div>

        <div className="curved-video-text" style={{ textShadow: "1px 1px 0 #1e1e1e, -1px 1px 0 #1e1e1e, 1px -1px 0 #1e1e1e, -1px -1px 0 #1e1e1e" }}>
          <h1>Your Partner in Aviation Industry</h1>
        </div>
      </div>

      <div style={{
              background: "#F4F9FF"
            }}>
        <div className="container d-flex align-items-center home-section py-4 overflow-x-hidden position-relative">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 d-flex justify-content-center align-items-center pe-5 mb-4" data-aos="slide-right">
                <img
                  src="/image/avcon-plane-image.png"
                  alt="Aviation Services"
                />
              </div>
              <div className="col-lg-6 text-start ps-5 mb-4" data-aos="slide-left">
                <h3 className="fw-bold mb-4 text-danger ps-3">
                  SERVICES & PRODUCTS
                </h3>
                <h5 className="fw-bold mb-4 text-primary ps-3">
                  Explore the range of services we offer to discover how we can assist you, or let us know your specific needs so we can provide the best possible support
                </h5>
                <a href="/product" className="btn btn-primary btn-lg ms-3 px-5 py-3 fs-5 fw-bold btn-aero" >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative ms-5" style={{ height: "8vh", width: "30vw" }}>
        <div className="position-absolute bg-primary"
          style={{ width: "50%", height: "40%", top: "0", left: "40%", transform: "skewX(30deg)" }}>
        </div>

        <div className="position-absolute bg-danger"
          style={{ width: "50%", height: "40%", top: "20%", left: "45%", transform: "skewX(30deg)" }}>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="slide-right" data-aos-duration="500">
            <div className="card text-center p-4 shadow-sm skill-box h-100">
              <div className="mb-3 text-primary">
                <i className="fas fa-fan fa-6x mt-5"></i>
              </div>
              <h5 className="text-primary">Aviation Material Supply</h5>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="slide-right"  data-aos-duration="1000">
            <div className="card text-center p-4 shadow-sm skill-box h-100">
              <div className="mb-3 text-primary">
                <i className="fas fa-handshake fa-6x mt-5"></i>
              </div>
              <h5 className="text-primary">Aviation Consultant</h5>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="slide-right" data-aos-duration="1500">
            <div className="card text-center p-4 shadow-sm skill-box h-100">
              <div className="mb-3 text-primary">
                <i className="fas fa-credit-card fa-6x mt-5"></i>
              </div>
              <h5 className="text-primary">Visa</h5>
            </div>
          </div>
        </div>
      </div><br/><br/><br/>

      <div className="container my-5 overflow-x-hidden">
        <div className="d-flex flex-column flex-md-row align-items-center p-5 text-white vision-card position-relative">
          <div className="vision-card-background"></div>
          <div className="vision-card-content">
            <p>
              Your satisfaction is our mission. We actively listen, provide clear answers, and craft customized solutions that cater to your unique requirements.
            </p>
            <a href="/contact" className="btn btn-danger fw-bold px-4 py-2 mt-3">
              Get In Touch Now
            </a>
          </div>

          <div className="position-absolute" data-aos="zoom-in" data-aos-duration="2000" style={{ zIndex: 2, right: 0 }}>
            <img src="/image/asset-avcon-frame-6.svg" alt="" className="img-fluid"  />
          </div>
          <div className="position-absolute" style={{ zIndex: 1, right: 0, bottom: 0 }}>
            <img src="/image/asset-avcon-frame-6.1.svg" alt="" className="img-fluid"  />
          </div>
        </div>
      </div>

      <div className="container my-5 overflow-x-hidden" data-aos="zoom-in" data-aos-duration="1000">
        <div className="row pt-5">
          <div className="col-md-12 d-flex justify-content-center mb-5">
            <img
              src="/image/quality-insurance.webp"
              alt="Certificate"
              className="certificate-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
