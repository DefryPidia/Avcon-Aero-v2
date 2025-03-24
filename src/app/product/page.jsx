const AboutUs = () => {
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
              <h2 className="fw-bold mb-1 aero-blue text-uppercase">Repair and Upgrade</h2>
              <p className="text-justify">
                we believe that you should never have to settle for second best. That's why we are committed to offering you only the highest quality repair and upgrade services. We understand that each aircraft is unique and requires specific attention and care. Our team of experts, therefore, will take care of all your needs in the best way possible. give similar
              </p>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">Exceptional customer service at great prices</h4>
              <p className="text-justify">
                Our main goal is always going above and beyond for our customers and we pride ourselves on being able to deliver exceptional customer service every time. With years of experience in the aviation industry, we can provide you with any product needed for your aircraft’s maintenance or repair needs. Our dedication to our customer’s needs, our high-quality products, and our competitive prices have helped us become a leading supplier for customers all over the world.
              </p>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">Quick and effective service</h4>
              <p className="text-justify">
                We know that the last thing you want is to be stranded on the tarmac with a broken engine. That's why we offer quick and effective service 24/7. With our extensive network of repair stations and our commitment to providing only the highest-quality parts and services, we can ensure that your aircraft is fully repaired and ready to fly again.
              </p>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">The right part. The right time.</h4>
              <p className="text-justify">
                We take the time to understand your needs and create a custom solution for you. Our team will find a cost-efficient fitting—from repair, calibration, test, tool upgrade, spare parts, and optimization. We are committed to providing our customers with the best possible service at an affordable price. Our extensive knowledge of the supply chain and local regulations ensures we can deliver the right part at the right time.We are dedicated to helping you improve performance in all aspects of your business. From providing high-quality parts and accessories to streamlining processes with our one-stop shop functionality, we’re ready to make sure that every aspect of your operation is running smoothly.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ backgroundColor: '#f2faff' }}>
          <div className="container col-md-10 pt-5 pb-2">
            <div data-aos="fade-right">
              <h2 className="fw-bold mb-1 aero-blue text-uppercase">Aviation Consultancy</h2>
              <p className="text-justify">
                We are a Indonesia-based aircraft spares supply company with a mission to provide the best aviation consultancy service to our clients. Our services are designed to help clients navigate the complex and ever-changing landscape of the aviation industry, with a focus on efficiency, cost-effectiveness, and compliance.We understand how important it is to have your aircraft in tip-top shape at all times, and we're here to help you get there. With our consultancy services, you can rest assured that your aircraft is being well looked after by experts who know what they're doing—and who will be able to give you advice on how to maintain your aircraft's performance and keep it safe.
              </p>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">Our international aviation consultancy services include:</h4>
              <div className="text-justify">
                <div className="mb-2">
                  <div className="fw-semibold">Aircraft Maintenance and Repair Information System (AMRS)</div>
                  <p className="text-justify">We provide a centralized system that allows you to manage all your maintenance records, and ensure that you are complying with all aviation rules.</p>
                </div>
                <div className="mb-2">
                  <div className="fw-semibold">Statutory & Regulatory compliance for all aviation activities</div>
                  <p className="text-justify">We help you stay compliant with all aviation regulations so that you can avoid fines and penalties.</p>
                </div>
                <div className="mb-2">
                  <div className="fw-semibold">Aircraft Spare Parts and Accessories supply chain management</div>
                  <p className="text-justify">We offer an end-to-end solution for your aircraft parts supply chain management needs. This includes everything from sourcing the parts to delivering them to your doorstep.</p>
                </div>
                <div className="mb-2">
                  <div className="fw-semibold">Aircraft Operational & Logistics Support services</div>
                  <p className="text-justify">We help you optimize your operations and logistics support by offering customized solutions for each client's unique needs</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">Service That Exceeds Expectations</h4>
              <p className="text-justify">
                Our team has extensive experience in the aviation industry, which allows us to provide an unparalleled level of service. We are committed to providing our clients with top-notch customer service and ensuring that they are satisfied with their purchases.<br />
                Our consultants are well-versed in the aviation industry and will help you make the right decisions for your business. With their expertise, experience, and commitment to providing the highest quality services, the company has established itself as a leading provider of aviation consulting services in the region.<br />
                For more information about our consultancy service or any other aspect of our business please email us at <span className="fw-semibold">sales@avconaero.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ backgroundColor: '#f2faff' }}>
          <div className="container col-md-10 py-5">
            <div data-aos="fade-right">
              <h2 className="fw-bold b-1 aero-blue text-uppercase">24x7 AOG Service</h2>
              <p className="text-justify">
                We understand the importance of keeping aircraft in the air and the financial losses associated with an Aircraft on Ground (AOG) situation. That's why we offer our clients 24X7 AOG service, ensuring that they have access to the parts and supplies they need to resolve AOG situations at any time, day or night. We handle everything from simple repairs to complex overhauls, and we make sure that you can get back in the air as quickly as possible.
              </p>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">Our AOG services include:</h4>
              <ul>
                <li>24/7 availability of spare parts to cover any type of ground delivery or air freight requirements</li>
                <li>Supply chain solutions that allow you to manage your inventory seamlessly and cost-effectively by providing complete visibility into your supply chain</li>
                <li>Same-day delivery of parts upon request</li>
                <li>Advanced shipment tracking capabilities for all parts shipped</li>
                <li>Logistics support for all shipments including customs clearance and documentation</li>
              </ul>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">For All Your Aero Supply Needs</h4>
              <p className="text-justify">
                We know that the last thing you want is to be stranded on the tarmac with a broken engine. That's why we offer quick and effective service 24/7. With our extensive network of repair stations and our commitment to providing only the highest-quality parts and services, we can ensure that your aircraft is fully repaired and ready to fly again.
              </p>
            </div>

            <div data-aos="fade-right">
              <h4 className="fw-bold mb-1 aero-red text-uppercase">The right part. The right time.</h4>
              <p className="text-justify">
                We understand the importance of keeping costs down, so our AOG service is designed to provide our clients with the best possible value. We work closely with our clients to understand their specific needs and tailor our service to meet those needs. Our wide range of parts and supplies, combined with our logistics support and cost-effective solutions, make us the go-to choice for aircraft supplies in the region.If you need any kind of help with your aircraft parts requirements, please email us today at <span className="fw-semibold">sales@avconaero.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
