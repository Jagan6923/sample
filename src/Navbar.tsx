import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark shadow-lg">
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold text-light">
          SecuroSphere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-light me-3 fs-5">
              Signup
            </Nav.Link>
            <Nav.Link href="#login" className="text-light me-3 fs-5">
              Login
            </Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
