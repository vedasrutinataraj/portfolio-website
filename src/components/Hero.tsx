import { Container } from "react-bootstrap";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-content">
          <div className="hero-text">
            <h1 data-aos="fade-up" data-aos-duration="800">Vedasruti N</h1>

            <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">Full Stack Developer</h3>

            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              React | React Native | TypeScript | CodeIgniter 4 | Firebase
            </p>

            <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="800" style={{ fontSize: '1rem', opacity: 0.9 }}>
              2 years of experience building scalable web and mobile applications
            </p>

            {/* <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <Button
                as="a"
                href={`${import.meta.env.BASE_URL}Vedasruti_Resume.pdf`}
                download="Vedasruti_Resume.pdf"
                style={{
                  background: 'linear-gradient(135deg, #c9ada7, #d4b5ad)',
                  border: 'none',
                  color: '#22223b',
                  fontWeight: '600',
                  padding: '12px 28px'
                }}
              >
                Download Resume
              </Button>
            </div> */}
          </div>

          {/* <div className="hero-image" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
            <img src={heroImage} alt="Hero illustration" />
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;