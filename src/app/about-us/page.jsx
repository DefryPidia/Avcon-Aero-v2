
const AboutUs = () => {
  return (
    <div className="" >
      <div>
        <div className="vid-page-title">
          <div className="vid-title">
            <div className="vid-video-mask">
              <video autoPlay muted loop playsInline>
                <source src="video/plane-bg.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="vid-text-box">
              <h1 className="display-1 fw-bolder text-uppercase" style={{ fontSize: "calc(1.5rem + 8vw)" }}>About Us</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid px-0"
          style={{
            backgroundImage: "url('/image/wave-background.svg')",
          }}
        >
          <div className="container col-md-10" data-aos="fade-right">
            <p className="text-justify">
              PT Avcon Angkasa Semesta, a leading provider of aviation solutions. We take pride in delivering on time and services to our customers worldwide.<br />
              At PT Avcon Angkasa Semesta, we are committed to excellence and customer satisfaction, We provide top-tier spare part sales, supported by our team of experts who are ready to offer technical assistance and guidance to our clients. <br />
              With our experience and dedication to the industry, we are committed to being a trusted partner for our customers. We look forward to continuing to serve and meet your needs in the future.
            </p>
          </div>

          <div className="container col-md-10 my-5" data-aos="fade-right">
            <h2 className="fw-bold mb-1 aero-blue text-uppercase">The Purpose</h2>
            <p className="text-justify">
              The goal is to establish a leading position in the aviation sector, initially focusing on attaining leadership in Asia and expanding globally. The company is committed to excellence, innovation, and superior performance across all aspects of the aviation industry. The aim is not only to succeed in the competitive Asian market but also to become a recognized global entity. Additionally, the company strives to provide robust support for the aviation industry, actively engaging in initiatives, collaborations, and innovations to enhance various aspects and contribute to its growth and progression.
            </p>
          </div>

          <div className="container col-md-10 pb-5" data-aos="fade-right">
            <h2 className="fw-bold mb-1 aero-blue text-uppercase">Aerospace aftermarket specialists</h2>
            <p className="text-justify">
              At the core of our commitment lies an unwavering dedication to addressing our clients' needs with utmost precision while upholding the pinnacle of safety and service standards. Collaborating closely with leading OEMs within the industry enables us to curate an unparalleled inventory of aircraft parts, ensuring precise compatibility for your specific aircraft model. Our comprehensive suite of offerings encompasses aircraft spare parts procurement, repair and overhaul services, bespoke aircraft chartering, alongside specialized aviation consultancy catering to both commercial and private aircraft operators.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;