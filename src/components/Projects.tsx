
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <h2 data-aos="fade-up">Featured Projects</h2>

        <Row>
          {projects.map((project, index) => (
            <Col md={4} sm={6} xs={12} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card.Body style={{ flex: 1 }}>
                  <Card.Title style={{ color: '#22223b', marginBottom: '15px' }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#4a4e69', marginBottom: '20px', minHeight: '60px' }}>
                    {project.description}
                  </Card.Text>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <h6 style={{ color: '#9a8c98', fontSize: '0.85rem', marginBottom: '10px', fontWeight: '600' }}>
                      Technologies:
                    </h6>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          style={{
                            background: 'linear-gradient(135deg, #4a4e69, #9a8c98)',
                            fontSize: '0.75rem',
                            padding: '4px 8px'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;