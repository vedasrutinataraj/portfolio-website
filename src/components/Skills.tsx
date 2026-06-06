import { Container, Row, Col, Card } from "react-bootstrap";
import { skills } from "../data/skills";

const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills">
      <Container>
        <h2 data-aos="fade-up">Skills & Expertise</h2>
        <p className="section-subtext" data-aos="fade-up" data-aos-delay="100">
          Practical skill sets for building modern web and mobile applications with clean UI, robust APIs, and efficient state management.
        </p>

        {Object.entries(groupedSkills).map(([category, items], categoryIndex) => (
          <div key={category} data-aos="fade-up" data-aos-delay={categoryIndex * 80}>
            <h4 className="skill-category">{category}</h4>

            <Row className="gx-3 gy-3">
              {items.map((skill, index) => (
                <Col md={4} sm={6} xs={12} key={skill.id} data-aos="fade-up" data-aos-delay={index * 50}>
                  <Card className="skill-card">
                    <Card.Body>
                      <h5>{skill.name}</h5>
                      {skill.description && <p>{skill.description}</p>}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;