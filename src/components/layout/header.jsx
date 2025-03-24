'use client'

import EmailIcon from "@public/icon/email.svg";
import LinkedinIcon from "@public/icon/linkedin.svg";
import PhoneIcon from "@public/icon/phone.svg";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavMiniBar = () => {
  return <div style={{
    content: "",
    position: "relative",
    top: "10px",
    bottom: 0,
    width: "100%",
    height: "3px",
    background: "linear-gradient(to right,#1F5FAF 50%,#DE0031 50%)",
  }}></div>
}

const Header = () => {
  const pathName = usePathname();

  useEffect(() => {
    AOS.init();
  }, [])

  console.log('pathName', pathName)

  return (
    <div className="sticky-top">
      <div className="aero-bg-blue">
        <div className="container text-white d-flex justify-content-between align-items-center">
          <div>
            <div className="d-inline-flex align-items-center me-4">
              <Image src={EmailIcon} alt="email" height={20} width={20} className="me-1" />
              sales@avconaero.com
            </div>
            <div className="d-inline-flex align-items-center">
              <Image src={PhoneIcon} alt="phone" height={20} width={20} className="me-1" />
              +62 818 0740 0663
            </div>
          </div>
          <div>
            <a href="#">
              <Image src={LinkedinIcon} alt="linkedin" height={50} width={100} />
            </a>
          </div>
        </div>
      </div>

      <Navbar bg="white" expand="lg" className="shadow-sm py-2">
        <Container>
          <Navbar.Brand href="/" as={Link} className="fw-bold text-dark d-flex align-items-center">
            <Image src="/image/avcon-aero-full-colored.svg" alt="logo" height={40} width={150} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto column-gap-2">
              <Nav.Link as={Link} href="/" className={`fw-medium ${pathName === "/" ? 'aero-blue' : ''}`}>Home {pathName === "/" && <NavMiniBar />} </Nav.Link>
              <Nav.Link as={Link} href="/about-us" className={`fw-medium ${pathName === "/about-us" ? 'aero-blue' : ''}`}>About Us {pathName === "/about-us" && <NavMiniBar />}</Nav.Link>
              <Nav.Link as={Link} href="/product" className={`fw-medium ${pathName === "/product" ? 'aero-blue' : ''}`}>Product & Service {pathName === "/product" && <NavMiniBar />}</Nav.Link>
              {/* <Nav.Link as={Link} href="/events" className={`fw-medium ${pathName === "/" ? 'aero-blue' : ''}`}>Events</Nav.Link> */}
              <Nav.Link as={Link} href="/career" className={`fw-medium ${pathName === "/career" ? 'aero-blue' : ''}`}>Career {pathName === "/career" && <NavMiniBar />}</Nav.Link>
              <Nav.Link as={Link} href="/contact" className={`fw-medium ${pathName === "/contact" ? 'aero-blue' : ''}`}>Contact {pathName === "/contact" && <NavMiniBar />}</Nav.Link>
            </Nav>
            <a href="mailto:sales@avconaero.com">
              <button className="aero-btn-outline-blue fw-medium ms-3">Request quote</button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;