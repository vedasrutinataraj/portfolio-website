import type { Experience } from "../interfaces/Experience";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Clerkverse Technologies Pvt Ltd",
    role: "Full Stack Developer",
    duration: "May 2024 - Present",
    location: "Coimbatore (Remote)",
    responsibilities: [
      "Developed and maintained scalable web and mobile applications using React, React Native, and Capacitor across multiple domains including food ordering, inventory management, ERP systems.",
      "Designed and implemented RESTful APIs using CodeIgniter 4 for order processing, sales and purchase transactions, user authentication, and payments.",
      "Managed global state using Redux Toolkit with async API calls using createAsyncThunk.",
      "Built reusable and responsive UI components using React Bootstrap and PrimeReact.",
      "Integrated real-time push notifications using Firebase Cloud Messaging (FCM).",
      "Handled Cashfree payment integration and resolved payment retry issues.",
      "Developed and maintained BIRT reports for business insights and data reporting.",
      "Optimized API performance and ensured secure data flow between frontend and backend.",
    ],
  },
  {
    id: 2,
    company: "Bluez Infomatic Solutions",
    role: "Junior Associate - Data Analyst",
    duration: "10 Months",
    location: "Gandhinagar, Tirupur",
    responsibilities: [
      "Processed and analyzed large datasets for business insights",
      "Performed data validation and quality checks",
      "Created reports and visualizations for stakeholders",
      "Collaborated with teams to support data-driven decisions",
    ],
  },
];