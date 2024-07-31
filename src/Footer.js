import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaTelegramPlane,
  FaFigma,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer-content">
          <Col
            md={6}
            className="d-flex flex-column align-items-center text-center text-md-left mb-3"
          >
            <div className="d-flex justify-content-center mb-2">
              <Button
                className="social-button"
                href="https://facebook.com"
                target="_blank"
              >
                <FaFacebookF />
              </Button>
              <Button
                className="social-button"
                href="https://github.com"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <Button
                className="social-button"
                href="https://t.me"
                target="_blank"
              >
                <FaTelegramPlane />
              </Button>
              <Button
                className="social-button"
                href="https://figma.com"
                target="_blank"
              >
                <FaFigma />
              </Button>
            </div>
            <p>Texto genérico aquí</p>
            <Button className="get-started-button mb-2">Get Started</Button>
          </Col>

          <Col
            md={6}
            className="d-flex flex-column align-items-center text-center text-md-left mb-3"
          >
            <div className="d-flex justify-content-between w-100">
              <Nav className="footer-menu">
                <Nav.Link href="#">Menu</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
                <Nav.Link href="#">Gallery</Nav.Link>
                <Nav.Link href="#">Team</Nav.Link>
              </Nav>
              <Nav className="footer-follow-us">
                <Nav.Link href="#">Follow us</Nav.Link>
                <Nav.Link href="#">Facebook</Nav.Link>
                <Nav.Link href="#">LinkedIn</Nav.Link>
                <Nav.Link href="#">Instagram</Nav.Link>
                <Nav.Link href="#">Telegram</Nav.Link>
                <Nav.Link href="#">YouTube</Nav.Link>
                <Nav.Link href="#">Twitter</Nav.Link>
              </Nav>
            </div>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={12}>
            <div className="legal-links">
              <Nav className="justify-content-center">
                <Nav.Link href="#">Privacy Policy</Nav.Link>
                <Nav.Link href="#">Terms of Use</Nav.Link>
                <Nav.Link href="#">Sales and Refunds</Nav.Link>
                <Nav.Link href="#">Legal</Nav.Link>
                <Nav.Link href="#">Site Map</Nav.Link>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
