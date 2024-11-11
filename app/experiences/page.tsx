'use client'
import Navbar from '@/components/navbar';
import React from 'react';
import { experiences, researchProjects } from '../data/timelineData';
import TimelinePage from '@/components/TimelinePage';

export default function ProjectsPage() {
  const experience = [
    {
      id: "5",
      title: "Data Engineering Intern - EPA OntoSearcher App",
      description: [
        "Led the creation of a scalable ETL pipeline to enhance EPA's OntoSearcher App, optimizing ontology mappings and improving data flow across federal systems.",
        "Engineered interoperable ontology file formats for over 30 federal databases, ensuring seamless integration of environmental, health, and safety data.",
        "Worked directly with federal partners under Dr. Branden Brough, Dr. Holly Mortensen, and Dr. Rhema Bjorkland driving high-quality data outputs and enhancing public safety databases.",
        "Resolved key issues to enhance application performance, boosting accuracy and reliability for government-wide ontology mapping efforts."
      ],
      date: "Internship, 2023",
      skills: ["ETL Processes", "Apache Airflow", "Python", "Data Warehousing", "Ontology Mapping", "SPARQL", "Collaboration Tools"],
      icon: "FileJson"
    },
    {
      id: "6",
      title: "HerdHealth",
      description: [
        "Engineered a data analytics application utilizing the MERN stack to enhance livestock vital-tracking systems for real-time data collection and analysis.",
        "Led a multidisciplinary team to the semifinals of UCSD's Triton Innovation Challenge, securing $3,000 in seed funding for further development.",
        "Collaborated with Keshif Ventures to optimize MVP production using agile methodologies and iterative testing.",
        "Implemented advanced data visualization techniques, facilitating actionable insights for farmers to improve livestock health management."
      ],
      date: "2024",
      skills: ["MERN Stack", "RESTful API Development", "Data Visualization (D3.js, Chart.js)", "MongoDB Aggregation Framework", "Node.js Express", "Agile Development", "User-Centric Design"],
      icon: "Leaf"
    },
    {
      id: "7",
      title: "Lumnus Consulting",
      description: [
        "Developed consulting frameworks leveraging multi-dataset insights from AI risk assessments and industry metrics for strategic decision-making.",
        "Led a cross-functional team to design and implement the Lumnus website, enhancing client engagement through user-centered design.",
        "Integrated data visualization and interactive features into the website, improving user experience and facilitating access to insights."
      ],
      date: "Consultant, 2024",
      skills: ["Data Analytics", "AI Risk Assessment Models", "Web Development (React, Node.js)", "Data Visualization (Tableau, Power BI)", "User Experience (UX) Design", "Responsive Design", "HTML/CSS"],
      icon: "Handshake"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#2a0845] via-[#1a1b4b] to-[#006bc6] bg-fixed" />
      {/* Content */}
      <div className="relative z-0">
        <TimelinePage
          type="projects"
          items={experience}
          title="Experience"
          overview="I've had the privilege of working on transformative projects across federal agencies and innovative startups. At the EPA, I engineered critical data systems for public safety. With HerdHealth, I led development of cutting-edge livestock management solutions, while at Lumnus Consulting, I've helped shape AI-driven business strategies. Each role has allowed me to combine my technical expertise with real-world impact."
          futurePlans="Building on my experience with data engineering and AI systems, I'm passionate about developing scalable solutions that drive meaningful change. I'm particularly interested in exploring new opportunities at the intersection of data science and practical applications."
        />
      </div>
    </div>
  );
}