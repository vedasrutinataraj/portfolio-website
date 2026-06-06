import type { Project } from "../interfaces/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Food Ordering Platform",
    description:
      "Responsive food ordering platform with real-time order tracking, payment integration via Cashfree, and instant notifications using Firebase Cloud Messaging. Users can browse food items, place orders, and track delivery status in real-time.",
    technologies: [
      "React",
      "React Native",
      "Redux Toolkit",
      "Firebase",
      "Capacitor",
      "Cashfree",
      "REST API",
    ],
    image: "/images/food-ordering.png",
  },

  {
    id: 2,
    title: "Inventory Management System",
    description:
      "Complete inventory and stock management solution with product entry, stock tracking, and billing system. Generates print-ready invoices for sales transactions with real-time stock updates and reporting.",
    technologies: [
      "React",
      "CodeIgniter 4",
      "MySQL",
      "Redux Toolkit",
      "REST API",
    ],
    image: "/images/inventory.png",
  },

  {
    id: 3,
    title: "Weaving ERP Management System",
    description:
      "Enterprise Resource Planning solution for textile industry handling master data, yarn, fabric management, sales orders, purchase orders, and business transactions. Includes BIRT reports for sales, purchase, and inventory data analysis.",
    technologies: [
      "React",
      "CodeIgniter 4",
      "Redux Toolkit",
      "MySQL",
      "BIRT Reports",
      "REST API",
    ],
    image: "/images/weaving-erp.png",
  },
];