export default function Home() {
  return (
    <>
      <div className="position-relative overflow-hidden home-section" 
           style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/dcd6/7343/dd2752706f837f834c6ecfc18b766ca2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wxvrkboh7YoZ9TcLPiyAQXbphdVL7MVt3BgMqehe6NlvOzWBAr2ScjPL4oWbbW~PHddDZIh6mZ~IQmCvA6F0xk7I-GiBB1xCSl9WEr4sx3Y~3EE50IH46t51V9PX8PP1JbXL7g2F8elx2rmTr3M7~WitkvllsysFeZAG8SgrYqdLFRcGM0nuELvXYnZRcpQrsORDVTWOXnpBR-IAgYchd6imT9XavkKtK1rYOVw2RStcih0JPc2S4K5NUvOHUqu95pgNK4eyk8vEWskugufPp2UW2748W~esxMVlMOQMz9OE4AhBfZD1TJf9BaOIdTzPG9Gy9odHbkkGnI8dS7Cr6Q__')", backgroundSize: "cover", backgroundPosition: "center" }}>

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
              <p className="fs-5 text-light display-3 position-relative" data-aos="slide-right" data-aos-duration="2000">
              From High-Quality Aircraft Parts To Comprehensive Aviation Solutions <br/>
              We Keep Your Operations Running Smoothly. Contact Us Today!
              </p>
              <a href="" className="btn btn-primary btn-lg px-5 py-3 fs-5 fw-bold btn-aero" data-aos="slide-right" data-aos-duration="2500" >Request Quote</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-relative overflow-hidden home-section"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/9b43b8_227c3a6474cc49d9be11d3280bef02db~mv2.jpg/v1/fill/w_1351,h_657,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9b43b8_227c3a6474cc49d9be11d3280bef02db~mv2.jpg')",
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
                ABOUT US
              </h1>
              <h1 className="display-4 fw-bold mb-4 text-primary position-relative ps-3">
                LEADING THE SKY WITH <br/>
                GLOBAL AVIATION <br/>
                SOLUTIONS
              </h1>
              <p className="fs-5 fw-semibold position-relative ps-3">
                With a worldwide network, we provide top-tier aircraft materials, <br/>
                delivering reliable solutions for even the most specialized <br/>
                components
              </p>
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
          <h1>Your Partner in Aviation Materials Excellence</h1>
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
                  src="https://s3-alpha-sig.figma.com/img/0efe/c46b/bff93c4dd7ebf00814a2f8638d57e3ae?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YyND~bedSFy-GbwgDPslWp6nzkFTWbCem9Y9t50V0UCLPo1ckOoR6jzItTzD5PML0GpOk4Tx~fv6cmEuAv19z1FOkzaGyUzvtZjP1K~64oL-Xw77OJ-ej5SjrvKwkxS36HmXIv1ojgTvyJt9iTH2aAm0Lt3H8aoPzdO1bsSE92ZPtAE3WzF5b8EWgvGZfCO9lciXyXkrre914VTaJ9s8Ne2mmlW-QRQsqFB6-6eHRMb5EYrgoddG4c2KEdSQKFVS2PC6uxWoCP6fhGPLqNkxp5VaSiMCAr~mrLGVIE2NPtJtPNbGAXiB3GDhnat09KOjdr4IN8HJJictvKUTouD8Yw__"
                  alt="Aviation Services"
                />
              </div>
              <div className="col-lg-6 text-start ps-5 mb-4" data-aos="slide-left">
                <h3 className="fw-bold mb-4 text-danger ps-3">
                  SERVICES & PRODUCTS
                </h3>
                <h1 className="fw-bold mb-4 text-primary ps-3">
                  QUALITY-DRIVEN REPAIR<br/>
                  AND UPGRADE SERVICES
                </h1>
                <p className="fs-5 ps-3">
                  We only use high-quality components to restore and enchance your
                  equipment, ensuring optimal performance and reliability
                </p>
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
                <i className="fas fa-wrench fa-6x mt-5"></i>
              </div>
              <h5 className="text-primary">Repair & Upgrade</h5>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="slide-right" data-aos-duration="1500">
            <div className="card text-center p-4 shadow-sm skill-box h-100">
              <div className="mb-3 text-primary">
                <i className="fas fa-plane fa-6x mt-5"></i>
              </div>
              <h5 className="text-primary">Ground Support Equipment</h5>
            </div>
          </div>

          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="slide-right" data-aos-duration="2000">
            <div className="card text-center p-4 shadow-sm skill-box h-100">
              <div className="mb-3 text-primary">
                <i className="fas fa-handshake fa-6x mt-5"></i>
              </div>
              <h5 className="text-primary">Aviation Consultancy</h5>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center" data-aos="slide-right" data-aos-duration="2500">
            <div className="card text-center p-4 shadow-sm skill-box h-100">
              <div className="mb-3 text-primary">
                <i className="fas fa-clock fa-6x mt-5"></i>
              </div>
              <h5 className="text-primary">24x7 AOG Service</h5>
            </div>
          </div>
        </div>
      </div><br/><br/><br/>

      <div className="container my-5 overflow-x-hidden">
        <div className="d-flex flex-column flex-md-row align-items-center p-5 text-white vision-card position-relative">
          <div className="vision-card-background"></div>
          <div className="vision-card-content">
            <h2 className="fw-bold">Driven By Quality, <br/> Safety And Care</h2>
            <p>
              Your satisfaction is our mission. We actively listen, provide clear answers, and craft customized solutions that cater to your unique requirements.
            </p>
            <a href="/contact" className="btn btn-danger fw-bold px-4 py-2">
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
          <div className="col-md-5 d-flex justify-content-center mb-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/3a5f/ce75/1a177487fb3b239cb99cc18dad566118?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U-R65cDhRPxsOfMpfkhI-0eBue60HXXcrCNI3GAHgjrH0UAr7l-sscoz7h5P-n2LJmZ3vZlbOyXv1TNBWaFIHQXlfru5dZXyX3cqH3Vl7MR5y7fbSZr6D1QgzfnuzsiWTFGqNm58OuMpMqH83UHjofajc9SgD623OFT0ZjOY10R9abxr-J3kbeSHnXGJeugosDSA4enuRTTpdRoFgqj~IpqzrxK616l563MHOwOJcIhPJZSo9vCMy3-NNLDTtk24P9yeGfsOCBl4gsEXvKDgPycssdkxN67ECC1Gr2wY8uS3icrI4J3fPjRmqhoaoBJs1o2gyrrJfVdWXnSb8qSAGw__"
              alt="Certificate"
              className="certificate-image"
            />
          </div>

          <div className="col-md-7 d-flex flex-column justify-content-start">
            <h1 className="fw-bold text-primary">OUR QUALITY ASSURANCE</h1>
            <p>
              We are also ISO certified, ensuring that our expendables meet the highest international
              standards of quality and reliability. This certification underscores our commitment to
              excellence and customer satisfaction, guaranteeing that our products consistently meet
              or exceed industry regulations. With our ISO certification, you can trust in the
              quality and reliability of our products for your aviation needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
