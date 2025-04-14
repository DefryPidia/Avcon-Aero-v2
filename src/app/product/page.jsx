import "./style.css";

const Product = () => {
  return (
    <div>
      <div className="vid-page-title my-5">
        <div className="vid-title">
          <div style={{
            // ambil style dari class .vid-video-mask, custom style agar teks tidak terpotong
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
          }}>
            <video autoPlay muted loop playsInline>
              <source src="video/plane-bg.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="vid-text-box">
            <h1 className="display-1 fw-bolder text-uppercase text-center" style={{ fontSize: "calc(1.5rem + 8vw)" }}>Product & <br /> Service</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0" style={{
        backgroundImage: "url('/image/wave-background.svg')",
        backgroundSize: "100% auto",
        backgroundRepeat: 'no-repeat',
      }}>

        <div className="container col-md-10 my-5" data-aos="fade-right">
          <h2 className="fw-bold mb-1 aero-blue text-uppercase">Aviation Material Supply</h2>
          <p className="text-justify">
            we understand the critical need for prompt access to aircraft parts. warehouse houses an extensive and regularly updated inventory, designed to facilitate a seamless search experience. Featuring a comprehensive selection, our stock includes 40 different sizes of Aircraft Tires, PBE Models, Wheels, Brakes, Rotables, LRUs, Expendables, Consumables, Lamps, Chemicals, and Emergency Equipment, all priced competitively.<br />
            Within the diverse market of aircraft parts, our primary focus remains delivering superior quality products at the most competitive prices. We take pride in our commitment to exceptional customer service, ensuring swift order processing and delivery, setting us apart within the industry.
          </p>
        </div>

        <div className="container-fluid" style={{ backgroundColor: '#f2faff' }}>
          <div className="container col-md-10 mt-5 pb-2" >
            <div data-aos="fade-right">
              <h2 className="fw-bold mb-1 aero-blue text-uppercase">Aviation Consultancy</h2>
              <p className="text-justify">
                We are an Indonesia-based aircraft spares supply company with a mission to provide the best aviation consultancy service to our clients. Our services are designed to help clients navigate the complex and ever-changing landscape of the aviation industry, with a focus on efficiency, cost-effectiveness, and compliance. We understand how important it is to have your aircraft in tip-top shape at all times, and we're here to help you get there. With our consultancy services, you can rest assured that your aircraft is being well looked after by experts who know what they're doing—and who will be able to give you advice on how to maintain your aircraft's performance and keep it safe.
              </p>
            </div>

            <div data-aos="fade-right" className="row" style={{ marginTop: "40px" }}>
              <div className="col-md-6">
                <ul>
                  <li><h4 className="fw-bold aero-blue text-uppercase">Aircraft purchase and lease</h4></li>
                  <li><h4 className="fw-bold aero-blue text-uppercase">Major parts purchase and lease</h4></li>
                  <li><h4 className="fw-bold aero-blue text-uppercase">Parts repair and overhaul</h4></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <li><h4 className="fw-bold aero-blue text-uppercase">Warehousing and consolidation</h4></li>
                  <li><h4 className="fw-bold aero-blue text-uppercase">Parts shipping and delivery</h4></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ backgroundColor: '#f2faff' }}>
          <div className="container col-md-10 mt-5 pb-4" data-aos="fade-right">
            <h2 className="fw-bold mb-1 aero-blue text-uppercase">Visa</h2>
            <p className="text-justify">
              Offering professional support and administrative assistance to individuals, groups, or organizations in the process of obtaining visas for international travel, work, study, or residency purposes.
            </p>
            <ul>
              <li>
                <div className="d-flex align-items-center">
                  <div className="fw-bold aero-blue text-uppercase" style={{ fontSize: "25px" }}>Nepali</div>
                  <img src="/image/country-nepal.svg" alt="nepal" height={27} width={27} className="ms-2" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
