"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.technologies": "Technologies",
    "nav.contact": "Contact",
    "home.title": "Hello, I am",
    "home.name": "Amelia Simone Feliu Pavez",
    "home.role": "Frontend Developer",
    "home.download": "Download CV",
    "about.title": "About Me",
    "about.description":
      "I am a graduate in Web Development and Design from Duoc UC, specializing in the creation and development of modern applications and websites. I focus on designing and building attractive, responsive, and high-performance interfaces, combining creativity and technical expertise to deliver digital experiences that excel in both aesthetics and functionality.<br/> <br/> With solid experience in UX/UI design, I create intuitive, practical, and user-centered solutions, ensuring that each project meets the goals of both the client and the end user. Additionally, I have developed a strong interest in QA, supported by specialized courses, which has allowed me to incorporate a detail-oriented and quality-driven approach into all stages of development.<br/> <br/>My goal is to transform ideas into effective digital solutions, integrating design, development, and quality assurance to deliver results that meet high standards and align with the specific needs of each project.",
    "about.skill1.title": "Web Development",
    "about.skill1.description":
      "Expertise in creating responsive and dynamic web applications using modern technologies.",
    "about.skill2.title": "Problem Solving",
    "about.skill2.description":
      "Analytical thinking and creative problem-solving skills to tackle complex challenges.",
    "about.skill3.title": "Continuous Learning",
    "about.skill3.description":
      "Passionate about staying up-to-date with the latest trends and technologies in the field.",
    "experience.title": "Work Experience",
    "experience.job1.title": "Frontend Trainee",
    "experience.job1.company": "Polite SPA",
    "experience.job1.period": "Jan - Aug 2024",
    "experience.job1.description":
      "Design of landing pages and web elements in Figma, creating visually appealing and functional interfaces based on client requirements. Front-end development with Next.js, TypeScript and SCSS, ensuring optimal performance and consistent user experiences. Implementation of responsive and accessible web structures using HTML, CSS, and Flexbox. Collaboration with teams to refine designs according to feedback and project needs.",
    "experience.job2.title": 'Academic internship',
    "experience.job2.company": "Tesla Insurtech",
    "experience.job2.period": "Feb - Jun 2023",
    "experience.job2.description":
      "Maintenance and updates of insurance websites using WordPress, PHP, and MySQL, managing dynamic content. Use of HTML, CSS, and Bootstrap to ensure responsive and functional designs. Structural and stylistic improvements were implemented to optimize the user experience.",
    "projects.title": "My Projects",
    "projects.soon": "More projects coming soon...",
    "projects.viewProject": "View Project",
    "projects.project1.title": "Landing page Serviclick",
    "projects.project1.description": "Website built with Next.js, TypeScript, and SCSS (www.serviclick.cl)",
    "projects.project2.title": "Landing page Felicity260",
    "projects.project2.description": "Serviclick alliance page made with Next.js, TypeScript, and SCSS. (Desktop Version)",
    "projects.project3.title": "Landing page SerEfimera",
    "projects.project3.description": "Catalog-type page for SMEs made with HTML, CSS, and JavaScript.",
    "projects.project4.title": "Landing page BancoChile",
    "projects.project4.description": "Serviclick alliance page made with Next.js, TypeScript, and SCSS. (Desktop Version)",
    "technologies.title": "Technologies I Use",
    "technologies.frontend": "Frontend",
    "technologies.databases": "Databases",
    "technologies.uxui": "UX/UI",
    "contact.title": "Get In Touch",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    name: "Education",
    "languages.title": "Languages",
    "languages.subtitle": "My language skills and professional certifications",
    "languages.language1": "Spanish",
    "languages.language2": "English",
    "languages.level1": "Native",
    "languages.level2": "Intermediate (B2)",
    "certifications.title": "Certifications",
    "certifications.cert1": "React - Udemy 2024",
    "certifications.cert2": "Sorftware Testing - Specialisterne Spain 2023",
    "certifications.cert3": "Testing QA Manual - Coderhouse 2023",
    "certifications.download": "Download",
    "education.title": "Education",
    "education.edu1": "Web Development and Design - Duoc UC 2023",
    "education.edu2": "High School complete - Liceo Insieme 2015",
    "education.download": "Download",
    "nav.languagesCertifications": "Education",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.technologies": "Tecnologías",
    "nav.contact": "Contacto",
    "home.title": "Hola, soy",
    "home.name": "Amelia Simone Feliu Pavez",
    "home.role": "Desarrolladora Frontend",
    "home.download": "Descargar CV",
    "about.title": "Sobre Mí",
    "about.description":
      "Soy una profesional titulada en Desarrollo y Diseño Web en Duoc UC, especializada en la creación y desarrollo de aplicaciones y sitios web modernos. Me dedico a diseñar y construir interfaces atractivas, responsivas y de alto rendimiento, combinando creatividad y técnica para ofrecer experiencias digitales que destacan tanto por su estética como por su funcionalidad. <br/> <br/>Con una sólida experiencia en diseño UX/UI, creo soluciones intuitivas, prácticas y centradas en el usuario, asegurando que cada proyecto cumpla con los objetivos tanto del cliente como del usuario final. Además, he desarrollado un interés particular en el área de QA, respaldado por cursos especializados, lo que me ha permitido integrar un enfoque detallista y orientado a la calidad en todos los procesos de desarrollo.<br/><br/> Mi objetivo es transformar ideas en soluciones digitales efectivas, uniendo diseño, desarrollo y control de calidad para garantizar resultados que cumplan con altos estándares y se ajusten a las necesidades específicas de cada proyecto.",
      "about.skill1.title": "Desarrollo Web",
    "about.skill1.description":
      "Experiencia en la creación de aplicaciones web responsivas y dinámicas utilizando tecnologías modernas.",
    "about.skill2.title": "Resolución de Problemas",
    "about.skill2.description":
      "Pensamiento analítico y habilidades creativas para resolver problemas complejos.",
    "about.skill3.title": "Aprendizaje Continuo",
    "about.skill3.description":
      "Apasionado por mantenerme actualizado con las últimas tendencias y tecnologías en el campo.",
    "experience.title": "Experiencia Laboral",
    "experience.job1.title": "Frontend Trainee",
    "experience.job1.company": "Polite SPA",
    "experience.job1.period": "Enero - Agosto 2024",
    "experience.job1.description":
      "Diseño de landing pages y elementos web en Figma, creando interfaces atractivas y funcionales basadas en los requisitos del cliente. Desarrollo  front-end con Next.js, TypeScript y SCSS, garantizando rendimiento óptimo y experiencias consistentes. Implemento de estructuras web responsivas y accesibles con HTML, CSS y Flexbox. Colaboración con equipos para ajustar diseños según feedback y necesidades del proyecto.",
    "experience.job2.title": "Práctica Profesional",
    "experience.job2.company": "Tesla Insurtech",
    "experience.job2.period": "Febrero - Junio 2023",
    "experience.job2.description":
      "Mantenimiento y actualización de sitios web de seguros utilizando WordPress, PHP y MySQL, gestionando contenido dinámico. Uso de HTML, CSS y Bootstrap para garantizar diseños responsivos y funcionales. Se implementaron mejoras estructurales y de estilo para optimizar la experiencia del usuario.",
    "projects.title": "Mis Proyectos",
    "projects.soon": "Más proyectos proximamente...",
    "projects.viewProject": "Ver Proyecto",
    "projects.project1.title": "Landing page Serviclick",
    "projects.project1.description":
      "Sitio web construida con Next.js, Typescript y SCSS (www.serviclick.cl)",
    "projects.project2.title": "Landing page Felicity260",
    "projects.project2.description":
      "Pagina alianza de Serviclick hecha con Next.js, Typescript y SCSS. (Desktop Version)",
    "projects.project3.title": "Landing page SerEfimera",
    "projects.project3.description":
      "Pagina tipo catalogo para pyme hecha con HTML, CSS Y Javascript.",
      "projects.project4.title": "Landing page BancoChile",
    "projects.project4.description":
      "Pagina alianza de Serviclick hecha con Next.js, Typescript y SCSS. (Desktop Version)",
    "technologies.title": "Tecnologías que utilizo",
    "technologies.frontend": "Frontend",
    "technologies.databases": "Bases de Datos",
    "technologies.uxui": "UX/UI",
    name: "Educación",
    "languages.title": "Idiomas ",
    "languages.subtitle":
      "Mis habilidades lingüísticas y certificaciones profesionales",
    "languages.language1": "Español",
    "languages.language2": "Inglés",
    "languages.level1": "Nativo",
    "languages.level2": "Intermedio (B2)",
    "certifications.title": "Certificaciones",
    "certifications.cert1": "React - Udemy 2024",
    "certifications.cert2": "Sorftware Testing - Specialisterne Spain 2023",
    "certifications.cert3": "Testing QA Manual - Coderhouse 2023",
    "certifications.download": "Descargar",
    "education.title": "Educación",
    "education.edu1": "Desarrollo y diseño web - Duoc UC 2023",
    "education.edu2": "Enseñanza media completa - Liceo Insieme 2015",
    "education.download": "Download",
    "nav.languagesCertifications": "Educación",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };
  

  const t = (key: string) => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
