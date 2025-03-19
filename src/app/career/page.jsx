'use client'

import Link from "next/link";

const Career = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url(/image/aircraft.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-4 rounded-3 shadow text-center" data-aos="zoom-in-down">
        <h2 className="fw-bold">Avcon Aero Currently no hiring for any job!</h2>
        <Link href="/" className="btn btn-danger mt-3">Go to Home</Link>
      </div>
    </div>

  )
}

export default Career;