'use client'

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useEffect } from 'react';
import AOS from "aos";


const Header = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="sticky-top">
      <div className="bg-dark text-white py-2 d-flex justify-content-between align-items-center px-4">
        <div>
          +971 65263464 sales@aeroasg.com
        </div>
        <div>
          <a href="#" className="text-white text-decoration-none fw-bold">
            Linked<span className="bg-light text-dark px-1 rounded">in</span>
          </a>
        </div>
      </div>

      <Navbar bg="white" expand="lg" className="shadow-sm py-2">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-dark d-flex align-items-center">
            <img src="/logo.png" alt="Logo" height="40" className="me-2" />
            Aero Supplies Global
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="/" className="text-danger fw-bold">HOME</Nav.Link>
              <Nav.Link as={Link} href="/about-us">ABOUT US</Nav.Link>
              <Nav.Link as={Link} href="/product">PRODUCT & SERVICE</Nav.Link>
              <Nav.Link as={Link} href="/events">EVENTS</Nav.Link>
              <Nav.Link as={Link} href="/career">ASG CAREER</Nav.Link>
              <Nav.Link as={Link} href="/contact">CONTACT</Nav.Link>
            </Nav>
            <Button variant="dark" className="ms-3">Request quote</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;