<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $servername = "localhost";
      $username = "root";
      $password = "";
      $dbname = "avcon_aero_db";

      $conn = new mysqli($servername, $username, $password, $dbname);

      if ($conn->connect_error) {
          die("Koneksi gagal: " . $conn->connect_error);
      }

      $data = json_decode(file_get_contents("php://input"), true);
      $firstName = $data['firstName'];
      $lastName = $data['lastName'];
      $email = $data['email'];
      $message = $data['message'];
      $createdAt = date('Y-m-d H:i:s');

      $stmt = $conn->prepare("INSERT INTO contact_details (first_name, last_name, email, message, created_at) VALUES (?, ?, ?, ?, ?)");
      $stmt->bind_param("sssss", $firstName, $lastName, $email, $message, $createdAt);

      if ($stmt->execute()) {
          echo json_encode(["success" => true]);
      } else {
          echo json_encode(["success" => false, "message" => $stmt->error]);
      }

      $stmt->close();
      $conn->close();
      exit;
  }
?>

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
  <div className="d-flex flex-column min-vh-100">
    <!-- Header Start -->
    <?php include './component/header.php' ?>
  <!-- Header End -->

  <!-- Body Start -->
  <main className="flex-grow-1">
    <div class="vid-page-title">
      <div class="vid-title">
        <div class="vid-video-mask">
          <video autoplay muted loop playsinline>
            <source src="./public/video/plane-bg.mp4" type="video/mp4">
          </video>
        </div>
        <div class="vid-text-box">
          <h1 class="display-1 fw-bolder text-uppercase" style="font-size: calc(1.5rem + 8vw);">Contact Us</h1>
        </div>
      </div>
    </div>

    <div class="container-fluid px-0"
      style="background-image: url('./public/image/wave-background.svg'); background-size: cover; background-repeat: no-repeat;">
      <div class="container col-md-9">
        <div class="row align-items-center py-5">
          <div class="col-lg-12">
            <h2 class="display-5 text-primary fw-bold mb-4">LET US HELP YOU</h2>
            <p class="fs-5">
              If you have any questions or concerns about Avcon Aero, please do not hesitate to contact us by filling
              out <br>
              the form below. We are dedicated to providing exceptional customer service, and we will be more than <br>
              happy to assist you and provide you with the information you need.
            </p>
          </div>
        </div>
      </div>

      <div class="container col-md-9">
        <div class="row align-items-center py-5">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4 text-primary">GIVE US YOUR <br> VALUABLE FEEDBACK</h2>
            <p class="mb-4 fs-5">
              We value your feedback and would love to hear <br>
              about your experience with Avcon Aero. If you <br>
              have any comments or suggestions, please feel free <br>
              to send them to our feedback email address:
            </p>
            <p class="mb-5 fs-5">
              Thank you for choosing Aero Supplies Global. We <br>
              look forward to serving you and providing you with <br>
              the best products and services in the aviation <br>
              industry.
            </p>

            <div class="mt-5">
              <h2 class="display-5 fw-bold mb-4 text-primary">CONTACT INFORMATION</h2>
              <h3 class="text-primary mb-2"><i class="fas fa-envelope"></i> sales@avconaero.com</h3>
              <h3 class="text-primary"><i class="fas fa-mobile"></i> +62 818-0740-0663</h3>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-5">
            <form onsubmit="validateCaptcha(event); submitForm(event)">
              <div class="row mb-4">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="firstName" class="form-label text-muted mb-1">First Name</label>
                    <input type="text" class="form-control form-control-lg rounded-4 border-dark" id="firstName">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="lastName" class="form-label text-muted mb-1">Last Name</label>
                    <input type="text" class="form-control form-control-lg rounded-4 border-dark" id="lastName">
                  </div>
                </div>
              </div>

              <div class="form-group mb-4">
                <label for="email" class="form-label text-muted mb-1">Email</label>
                <input type="email" class="form-control form-control-lg rounded-4 border-dark" id="email">
              </div>

              <div class="form-group mb-4">
                <label for="message" class="form-label text-muted mb-1">Message</label>
                <textarea class="form-control form-control-lg rounded-4 border-dark" id="message" rows="5"></textarea>
              </div>

              <div class="form-group mb-4">
                <label class="text-muted mb-1">Captcha</label>
                <div class="g-recaptcha" data-sitekey="6LcolfsqAAAAAIi9cFTjZZ1v6U9Rws6kDw_-rEBD"></div>
              </div>
              <div id="captchaError" class="text-danger" style="display: none;">Please complete the captcha.</div>
              <button type="submit" class="btn btn-primary px-4 py-3 fw-semibold rounded-4 col-md-12">
                Send Message
              </button>
            </form>
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
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <script>
    function validateCaptcha(event) {
      var response = grecaptcha.getResponse();
      if (response.length === 0) {
        event.preventDefault();
        document.getElementById('captchaError').style.display = 'block';
      }
    }

    function submitForm(event) {
      event.preventDefault();
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          location.reload();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  </script>
</body>

</html>