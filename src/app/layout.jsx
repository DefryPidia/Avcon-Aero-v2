import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import 'aos/dist/aos.css';
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "Avcon Aero",
  description: "From High-Quality Aircraft Parts To Comprehensive Aviation Solutions We Keep Your Operations Running Smoothly. Contact Us Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
