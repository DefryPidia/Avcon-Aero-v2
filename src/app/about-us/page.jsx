
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
            backgroundSize: "100% auto",
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="container col-md-10" data-aos="fade-right">
            <p className="text-justify">
              Avcon Aero providing reliable solutions to meet your various aviation needs. With a commitment to quality and dependability, whether it is aircraft maintenance, fleet management, or spare parts supply, our team of professionals is ready to deliver the best solutions that adhere to industry standards. Customer trust is our top priority, ensuring that every service we offer prioritizes satisfaction and timeliness
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
              Airparts aftermarket specialist
              offering a wide range of high-quality components for aircraft maintenance, repair, and operations. As experts in this field, they supply refurbished, reconditioned, or new parts at more competitive prices compared to OEM (Original Equipment Manufacturer) parts. <br /><br />

              With expertise in sourcing, distribution, and inventory management, we ensures the availability of reliable components that meet aviation industry standards. our services include the procurement of parts for both commercial and business aircraft, with a focus on cost efficiency without compromising safety and quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;