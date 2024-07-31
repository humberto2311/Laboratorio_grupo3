import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./App.css";
import { FaSearch, FaShoppingCart, FaInfoCircle } from "react-icons/fa";
function App() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="path/to/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-center">
            <Nav.Link href="#home">WOW</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#kids">Kids</Nav.Link>
            <Nav.Link href="#sale">Sale</Nav.Link>
          </Nav>

          <Nav className="ms-auto nav-buttons">
            <Nav.Link href="#search">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingCart />
            </Nav.Link>
            <NavDropdown title={<FaInfoCircle />} id="info-dropdown">
              <NavDropdown.Item href="#about">About</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
