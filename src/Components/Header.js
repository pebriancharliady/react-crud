import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import '../css/Header.css'

function Header() {
  return (
    <>
      <Navbar className="Header mb-5 py-3">
        <Container fluid>
          <h5>Dashboard</h5>
          {/* <Image /> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
