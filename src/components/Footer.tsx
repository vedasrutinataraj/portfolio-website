import { Container } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-content" data-aos="fade-up">
          <h4>Vedasruti N</h4>

          <p>Full Stack Developer</p>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:vedasrutinataraj@gmail.com"
              title="Email"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Vedasruti N.
            All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;