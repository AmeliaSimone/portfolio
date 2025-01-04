'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.technologies': 'Technologies',
    'nav.contact': 'Contact',
    'home.title': 'Hello, I am',
    'home.name': 'Amelia Simone Feliu Pavez',
    'home.role': 'Frontend Developer',
    'home.download': 'Download CV',
    'about.title': 'About Me',
    'about.description': 'I am a professional graduate in Web Development and Design from Duoc UC, specializing in the creation and development of web applications and websites. My focus is on designing and developing modern, responsive, and high-performance interfaces that blend aesthetics with technical efficiency. I am dedicated to transforming concepts into effective digital solutions, combining creativity, innovation, and a solid technical foundation to deliver superior quality web experiences tailored to user needs and business objectives.',
    'about.skill1.title': 'Web Development',
    'about.skill1.description': 'Expertise in creating responsive and dynamic web applications using modern technologies.',
    'about.skill2.title': 'Problem Solving',
    'about.skill2.description': 'Analytical thinking and creative problem-solving skills to tackle complex challenges.',
    'about.skill3.title': 'Continuous Learning',
    'about.skill3.description': 'Passionate about staying up-to-date with the latest trends and technologies in the field.',
    'experience.title': 'Work Experience',
    'experience.job1.title': 'Senior Frontend Developer',
    'experience.job1.company': 'Tech Corp',
    'experience.job1.period': '2020 - Present',
    'experience.job1.description': 'Led the frontend team in developing responsive web applications using React and Next.js.',
    'experience.job2.title': 'Frontend Developer',
    'experience.job2.company': 'Web Solutions Inc',
    'experience.job2.period': '2018 - 2020',
    'experience.job2.description': 'Developed and maintained client websites using JavaScript, HTML, and CSS.',
    'experience.job3.title': 'Junior Web Developer',
    'experience.job3.company': 'StartUp Co',
    'experience.job3.period': '2016 - 2018',
    'experience.job3.description': 'Assisted in the development of web applications and learned modern web technologies.',
    'projects.title': 'My Projects',
    'projects.viewProject': 'View Project',
    'projects.project1.title': 'Landing page Serviclick',
    'projects.project1.description': 'Sitio web construida con Next.js, Typescript y SCSS (www.serviclick.cl)',
    'projects.project2.title': 'Landing page Felicity260',
    'projects.project2.description': 'Pagina alianza de Serviclick hecha con Next.js, Typescript y SCSS. (Desktop Version)',
    'projects.project3.title': 'Landing page SerEfimera',
    'projects.project3.description': 'Pagina tipo catalogo para pyme hecha con HTML, CSS Y Javascript.',
    'technologies.title': 'Technologies I Use',
    'technologies.frontend': 'Frontend',
    'technologies.databases': 'Databases',
    'technologies.uxui': 'UX/UI',
    'contact.title': 'Get In Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'name':'Languages and certifications',
    'languages.title': 'Languages',
    'languages.subtitle': 'My language skills and professional certifications',
    'languages.language1': 'Spanish',
    'languages.language2': 'English',
    'languages.level1': 'Native',
    'languages.level2': 'Intermediate (B2)',
    'certifications.title': 'Certifications',
    'certifications.cert1': 'React - Udemy 2024',
    'certifications.cert2': 'Sorftware Testing - Specialisterne Spain 2023',
    'certifications.cert3': 'Testing QA Manual - Coderhouse 2023',
    'certifications.download': 'Download',
    'nav.languagesCertifications': 'Languages & Certifications',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.technologies': 'Tecnologías',
    'nav.contact': 'Contacto',
    'home.title': 'Hola, soy',
    'home.name': 'Amelia Simone Feliu Pavez',
    'home.role': 'Desarrollador Frontend',
    'home.download': 'Descargar CV',
    'about.title': 'Sobre Mí',
    'about.description': 'Soy profesional titulada en Desarrollo y Diseño Web en Duoc UC, con especialización en la creación y desarrollo de aplicaciones y sitios web. Mi enfoque se centra en el diseño y desarrollo de interfaces modernas, responsivas y de alto rendimiento, que fusionan la estética con la eficiencia técnica. Me dedico a transformar conceptos en soluciones digitales efectivas, combinando creatividad, innovación y una sólida base técnica para ofrecer experiencias web de calidad superior, adaptadas a las necesidades del usuario y los objetivos empresariales.',
    'about.skill1.title': 'Desarrollo Web',
    'about.skill1.description': 'Experiencia en la creación de aplicaciones web responsivas y dinámicas utilizando tecnologías modernas.',
    'about.skill2.title': 'Resolución de Problemas',
    'about.skill2.description': 'Pensamiento analítico y habilidades creativas para resolver problemas complejos.',
    'about.skill3.title': 'Aprendizaje Continuo',
    'about.skill3.description': 'Apasionado por mantenerme actualizado con las últimas tendencias y tecnologías en el campo.',
    'experience.title': 'Experiencia Laboral',
    'experience.job1.title': 'Frontend Trainee',
    'experience.job1.company': 'Polite SPA',
    'experience.job1.period': 'Enero - Agosto 2024',
    'experience.job1.description': 'Diseño landing pages y elementos web en Figma, creando interfaces atractivas y funcionales basadas en los requisitos del cliente. Desarrollo front-end con Next.js, TypeScript y SCSS, garantizando rendimiento óptimo y experiencias consistentes. Implemento estructuras web responsivas y accesibles con HTML, CSS y Flexbox. Colaboro con equipos para ajustar diseños según feedback y necesidades del proyecto.',
    'experience.job2.title': 'Práctica Profesional',
    'experience.job2.company': 'Tesla Insurtech',
    'experience.job2.period': 'Febrero - Junio 2023',
    'experience.job2.description': 'Mantuve y actualicé sitios web de seguros con WordPress, PHP y MySQL, gestionando contenido dinámico. Utilicé HTML, CSS y Bootstrap para asegurar diseños responsivos y funcionales. Implementé mejoras estructurales y de estilo para optimizar la experiencia del usuario.',
    'projects.title': 'Mis Proyectos',
    'projects.viewProject': 'Ver Proyecto',
    'projects.project1.title': 'Landing page Serviclick',
    'projects.project1.description': 'Sitio web construida con Next.js, Typescript y SCSS (www.serviclick.cl)',
    'projects.project2.title': 'Landing page Felicity260',
    'projects.project2.description': 'Pagina alianza de Serviclick hecha con Next.js, Typescript y SCSS. (Desktop Version)',
    'projects.project3.title': 'Landing page SerEfimera',
    'projects.project3.description': 'Pagina tipo catalogo para pyme hecha con HTML, CSS Y Javascript.',
    'technologies.title': 'Tecnologías que utilizo',
    'technologies.frontend': 'Frontend',
    'technologies.databases': 'Bases de Datos',
    'technologies.uxui': 'UX/UI',
    'name':'Idiomas y Certificaciones',
    'languages.title': 'Idiomas ',
    'languages.subtitle': 'Mis habilidades lingüísticas y certificaciones profesionales',
    'languages.language1': 'Español',
    'languages.language2': 'Inglés',
    'languages.level1': 'Nativo',
    'languages.level2': 'Intermedio (B2)',
    'certifications.title': 'Certificaciones',
    'certifications.cert1': 'React - Udemy 2024',
    'certifications.cert2': 'Sorftware Testing - Specialisterne Spain 2023',
    'certifications.cert3': 'Testing QA Manual - Coderhouse 2023',
    'certifications.download': 'Descargar',
    'nav.languagesCertifications': 'Idiomas y Certificaciones',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
