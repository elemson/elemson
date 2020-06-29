import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles.css";

export default function NavigationBar() {
  /* ====================Start Header Area =================== */

  return (
    <>
      <div className="App">
        <header className="header_area">
          <div className="main-menu">
            <Navbar bg="light" expand="lg" className="navbar">
              <Navbar.Brand href="#home" className="navbar-brand">
                <img src="" alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav-bar">
                  <Nav.Link href="#home" className="nav-link active">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#home" className="nav-link">
                    About
                  </Nav.Link>
                  <Nav.Link href="#link" className="nav-link">
                    {" "}
                    Services
                  </Nav.Link>
                  <Nav.Link href="#link" className="nav-link">
                    {" "}
                    Portfolio
                  </Nav.Link>
                  <Nav.Link href="#link" className="nav-link">
                    {" "}
                    Pages
                  </Nav.Link>
                  <Nav.Link href="#link" className="nav-link">
                    {" "}
                    Blog
                  </Nav.Link>
                  <Nav.Link href="#link" className="nav-link">
                    {" "}
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </header>
      </div>
    </>
  );
}
