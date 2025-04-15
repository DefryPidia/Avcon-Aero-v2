<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="From High-Quality Aircraft Parts To Comprehensive Aviation Solutions We Keep Your Operations Running Smoothly. Contact Us Today!" />

  <title>Avcon Aero</title>
  <?php include './component/page_style.php' ?>
</head>

<body>
  <div class="d-flex flex-column min-vh-100">
    <!-- Header Start -->
    <?php include './component/header.php' ?>
    <!-- Header End -->

    <!-- Body Start -->
    <main class="flex-grow-1">
      <div class="vid-page-title my-5">
        <div class="vid-title">
          <div style="
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                height: 100%;
              ">
            <video autoplay muted loop playsinline style="width: 100%;">
              <source src="./public/video/plane-bg.mp4" type="video/mp4">
            </video>
          </div>
          <div class="vid-text-box">
            <h1 class="display-1 fw-bolder text-uppercase text-center" style="font-size: calc(1.5rem + 8vw);">
              Product & <br> Service
            </h1>
          </div>
        </div>

        <div class="container-fluid px-0" style="
    background-image: url('./public/image/wave-background.svg');
    background-size: 100% auto;
    background-repeat: no-repeat;
">
          <div class="container col-md-10 my-5" data-aos="fade-right">
            <h2 class="fw-bold mb-1 aero-blue text-uppercase">Aviation Material Supply</h2>
            <p class="text-justify">
              We understand the critical need for prompt access to aircraft parts. Our warehouse houses an extensive and
              regularly updated inventory, designed to facilitate a seamless search experience. Featuring a
              comprehensive selection, our stock includes 40 different sizes of Aircraft Tires, PBE Models, Wheels,
              Brakes, Rotables, LRUs, Expendables, Consumables, Lamps, Chemicals, and Emergency Equipment, all priced
              competitively.<br>
              Within the diverse market of aircraft parts, our primary focus remains delivering superior quality
              products at the most competitive prices. We take pride in our commitment to exceptional customer service,
              ensuring swift order processing and delivery, setting us apart within the industry.
            </p>
          </div>

           <div class="container-fluid" style={{ backgroundColor: '#f2faff' }}>
          <div class="container col-md-10 mt-5 pb-2" >
            <div data-aos="fade-right">
              <h2 class="fw-bold mb-1 aero-blue text-uppercase">Aviation Consultancy</h2>
              <p class="text-justify">
                We are an Indonesia-based aircraft spares supply company with a mission to provide the best aviation consultancy service to our clients. Our services are designed to help clients navigate the complex and ever-changing landscape of the aviation industry, with a focus on efficiency, cost-effectiveness, and compliance. We understand how important it is to have your aircraft in tip-top shape at all times, and we're here to help you get there. With our consultancy services, you can rest assured that your aircraft is being well looked after by experts who know what they're doing—and who will be able to give you advice on how to maintain your aircraft's performance and keep it safe.
              </p>
            </div>

            <div data-aos="fade-right" class="row" style={{ marginTop: "40px" }}>
              <div class="col-md-6">
                <ul>
                  <li><h4 class="fw-bold aero-blue text-uppercase">Aircraft purchase and lease</h4></li>
                  <li><h4 class="fw-bold aero-blue text-uppercase">Major parts purchase and lease</h4></li>
                  <li><h4 class="fw-bold aero-blue text-uppercase">Parts repair and overhaul</h4></li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li><h4 class="fw-bold aero-blue text-uppercase">Warehousing and consolidation</h4></li>
                  <li><h4 class="fw-bold aero-blue text-uppercase">Parts shipping and delivery</h4></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" style={{ backgroundColor: '#f2faff' }}>
          <div class="container col-md-10 mt-5 pb-4" data-aos="fade-right">
            <h2 class="fw-bold mb-1 aero-blue text-uppercase">Visa Assistance Service Provider</h2>
            <p class="text-justify">
              Offering professional support and administrative assistance to individuals, groups, or organizations in the process of obtaining visas for international travel, work, study, or residency purposes.
            </p>
            <ul>
              <li>
                <div class="d-flex align-items-center">
                  <div class="fw-bold aero-blue text-uppercase" style={{ fontSize: "25px" }}>Nepali</div>
                  <img src="public/image/country-nepal.svg" alt="nepal" height={27} width={27} class="ms-2" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        </div>

      </div>

    </main>
    <!-- Body End -->

    <!-- Footer Start -->
    <?php include './component/footer.php' ?>
    <!-- Footer End -->
  </div>
</body>

</html>