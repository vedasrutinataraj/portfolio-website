import { Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="portfolio-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <span className="logo-text">Vedasruti N</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
          style={{ color: '#f2e9e4' }}
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#about" className="fw-500">
              About
            </Nav.Link>

            <Nav.Link href="#skills" className="fw-500">
              Skills
            </Nav.Link>

            <Nav.Link href="#experience" className="fw-500">
              Experience
            </Nav.Link>

            <Nav.Link href="#projects" className="fw-500">
              Projects
            </Nav.Link>

            <Nav.Link href="#contact" className="fw-500">
              Contact
            </Nav.Link>

            <Nav.Link
              href="https://github.com/vedasrutinataraj/portfolio-website"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub Profile"
              className="social-icon"
            >
              <FaGithub />
            </Nav.Link>

            <Nav.Link
              href="https://www.linkedin.com/in/vedasruti-nataraj-454b3827b/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
              className="social-icon"
            >
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;