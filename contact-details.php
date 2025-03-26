<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "avcon_aero_db";

$conn = new mysqli($servername, $username, $password, $dbname);


$limit = 9;

$total_sql = "SELECT COUNT(*) as total FROM contact_details";
$total_result = $conn->query($total_sql);
$total_row = $total_result->fetch_assoc();
$total_data = $total_row['total'];

$total_pages = ceil($total_data / $limit);

$current_page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$current_page = max(1, min($total_pages, $current_page));

$offset = ($current_page - 1) * $limit;

$sql = "SELECT * FROM contact_details ORDER BY created_at DESC LIMIT $limit OFFSET $offset";
$result = $conn->query($sql);
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
  <div class="d-flex flex-column min-vh-100">
    <!-- Header Start -->
    <?php include './component/header.php' ?>
    <!-- Header End -->

    <!-- Body Start -->
    <div class="container py-4">
      <h1 class="mb-4 fw-bold">Contact Messages</h1>
      <div class="row g-4">
        <?php if ($result->num_rows > 0): ?>
          <?php while($row = $result->fetch_assoc()): ?>
            <div class="col-md-4">
              <div class="p-3 border rounded shadow-sm bg-light">
                <h5 class="fw-bold"><?= htmlspecialchars($row['first_name'] . ' ' . $row['last_name']) ?></h5>
                <p class="mb-1"><?= htmlspecialchars($row['message']) ?></p>
                <p class="text-muted small"><?= htmlspecialchars($row['email']) ?></p>
                <p class="text-muted small">Submitted at: <?= htmlspecialchars(date('d-M-Y H:i:s', strtotime($row['created_at']))) ?></p>
              </div>
            </div>
          <?php endwhile; ?>
        <?php else: ?>
          <p class="text-muted">No messages found.</p>
        <?php endif; ?>
        <?php $conn->close(); ?>
      </div>
      <br>
      <!-- Pagination -->
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <?php if ($current_page > 1): ?>
            <li class="page-item">
              <a class="page-link" href="?page=<?= $current_page - 1 ?>" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          <?php endif; ?>

          <?php for ($i = 1; $i <= $total_pages; $i++): ?>
            <li class="page-item <?= ($i === $current_page) ? 'active' : '' ?>">
              <a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a>
            </li>
          <?php endfor; ?>

          <?php if ($current_page < $total_pages): ?>
            <li class="page-item">
              <a class="page-link" href="?page=<?= $current_page + 1 ?>" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          <?php endif; ?>
        </ul>
      </nav>
    </div>
    <!-- Body End -->

    <!-- Footer Start -->
    <?php include './component/footer.php' ?>
    <!-- Footer End -->
  </div>
</body>

</html>