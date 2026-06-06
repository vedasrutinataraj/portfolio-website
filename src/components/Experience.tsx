import { Container } from "react-bootstrap";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "CLERKVERSE TECHNOLOGIES PRIVATE LIMITED",
      location: "Hybrid | Coimbatore",
      dates: "05/2024 – Present",
      responsibilities: [
        "Developed and maintained scalable web and mobile applications using React, React Native, and Capacitor across multiple domains including food ordering, inventory management, ERP (weaving industry), and matrimony platforms.",
        "Designed and implemented RESTful APIs using CodeIgniter (PHP) for core functionalities such as order processing, sales and purchase transactions, user authentication, payments, and admin management.",
        "Developed and maintained BIRT reports for business insights and data reporting.",
        "Handled end-to-end API integration using Axios.",
        "Managed global state using Redux Toolkit and implemented asynchronous API calls with createAsyncThunk.",
        "Built reusable and responsive UI components using React Bootstrap, PrimeReact, and React Native Paper.",
        "Integrated real-time push notifications using Firebase Cloud Messaging (FCM).",
        "Optimized API performance, handled validation, and ensured secure data flow between frontend and backend.",
        "Troubleshot and resolved payment retry issues during Cashfree integration before production release."
      ]
    },
    {
      id: 2,
      title: "Junior Associate - Data Analyst",
      company: "BLUEZ INFOMATIC SOLUTIONS",
      location: "Gandhinagar, Tirupur",
      dates: "10 Months",
      responsibilities: [
        "Worked on data analytics tasks and supported reporting workflows.",
        "Assisted in generating business insights from client datasets.",
        "Collaborated with cross-functional teams to verify data accuracy and report results."
      ]
    }
  ];

  return (
    <section id="experience">
      <Container>
        <h2 data-aos="fade-up">Experience</h2>

        {experienceData.map((exp, index) => (
          <div key={exp.id} className="timeline" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="timeline-header">
              <h4>{exp.title}</h4>
              <p className="timeline-meta">{exp.company} · {exp.location}</p>
              <p className="timeline-duration">{exp.dates}</p>
            </div>
            <ul>
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Experience;