import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Container, Form, Button, Alert } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact from Portfolio Website - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:vedasrutinataraj@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <Container>
        <h2 data-aos="fade-up">Get In Touch</h2>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p data-aos="fade-up" data-aos-delay="100" style={{
            textAlign: 'center',
            color: '#4a4e69',
            marginBottom: '24px',
            fontSize: '1.05rem'
          }}>
            Use the form below to open your default email client and send me a message directly.
          </p>

          {submitted && (
            <Alert variant="success" data-aos="fade-up" data-aos-delay="150">
              Your email composer should open now. If it doesn't, please send an email to
              <strong> vedasrutinataraj@gmail.com</strong>.
            </Alert>
          )}

          <Form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="150">
            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#22223b', fontWeight: '600' }}>
                Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                style={{
                  borderColor: '#c9ada7',
                  borderWidth: '2px',
                  padding: '10px 12px'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#22223b', fontWeight: '600' }}>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                style={{
                  borderColor: '#c9ada7',
                  borderWidth: '2px',
                  padding: '10px 12px'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ color: '#22223b', fontWeight: '600' }}>
                Message
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message here..."
                required
                style={{
                  borderColor: '#c9ada7',
                  borderWidth: '2px',
                  padding: '10px 12px',
                  fontFamily: 'inherit'
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100"
              style={{
                background: 'linear-gradient(135deg, #22223b, #4a4e69)',
                border: 'none',
                padding: '12px 20px',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              Send Message
            </Button>
          </Form>

          {/* <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <p style={{ color: '#9a8c98', marginBottom: '12px' }}>
              Or reach out directly:
            </p>
            <p style={{ color: '#4a4e69', marginBottom: '4px' }}>
              <strong>Email:</strong> vedasrutinataraj@gmail.com
            </p>
          
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Contact;