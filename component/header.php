<div class="sticky-top">
    <div class="aero-bg-blue">
        <div class="container text-white d-flex justify-content-between align-items-center py-2">
            <div>
                <span class="d-inline-flex align-items-center me-4">
                    <img src="./public/icon/email.svg" alt="email" height="20" width="20" class="me-1" />
                    sales@avconaero.com
                </span>
                <span class="d-inline-flex align-items-center">
                    <img src="./public/icon//phone.svg" alt="phone" height="20" width="20" class="me-1" />
                    +62 818 0740 0663
                </span>
            </div>
            <div>
                <a href="#">
                    <img src="./public/icon/linkedin.svg" alt="linkedin" height="50" width="100" />
                </a>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
        <div class="container">
            <a class="navbar-brand fw-bold text-dark d-flex align-items-center" href="./">
                <img src="./public/image/avcon-aero-full-colored.svg" alt="logo" height="40" width="150" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto column-gap-2">
                  <li class="nav-item">
                      <a class="nav-link fw-medium <?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? 'aero-blue' : ''; ?>" href="./index.php">Home
                          <?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '<div class="nav-mini-bar"></div>' : ''; ?>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link fw-medium <?php echo (basename($_SERVER['PHP_SELF']) == 'about-us.php') ? 'aero-blue' : ''; ?>" href="./about-us.php">About Us
                          <?php echo (basename($_SERVER['PHP_SELF']) == 'about-us.php') ? '<div class="nav-mini-bar"></div>' : ''; ?>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link fw-medium <?php echo (basename($_SERVER['PHP_SELF']) == 'product.php') ? 'aero-blue' : ''; ?>" href="./product.php">Product & Service
                          <?php echo (basename($_SERVER['PHP_SELF']) == 'product.php') ? '<div class="nav-mini-bar"></div>' : ''; ?>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link fw-medium <?php echo (basename($_SERVER['PHP_SELF']) == 'career.php') ? 'aero-blue' : ''; ?>" href="./career.php">Career
                          <?php echo (basename($_SERVER['PHP_SELF']) == 'career.php') ? '<div class="nav-mini-bar"></div>' : ''; ?>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link fw-medium <?php echo (basename($_SERVER['PHP_SELF']) == 'contact.php') ? 'aero-blue' : ''; ?>" href="./contact.php">Contact
                          <?php echo (basename($_SERVER['PHP_SELF']) == 'contact.php') ? '<div class="nav-mini-bar"></div>' : ''; ?>
                      </a>
                  </li>
                </ul>
                <a href="mailto:sales@avconaero.com" class="ms-3">
                    <button class="aero-btn-outline-blue fw-medium">
                        Request quote
                    </button>
                </a>
            </div>
        </div>
    </nav>
</div>