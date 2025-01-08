'use client'

import { useLanguage } from '../../context/language-context'
import styles from './technologies.module.scss'
import { useEffect, useState } from 'react'
import { FaReact, FaHtml5, FaCss3Alt,FaPhp, FaFigma,FaSass,FaJs,FaWordpress,FaBootstrap } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiMongodb, SiMysql, SiAdobexd,SiAdobeillustrator } from 'react-icons/si'

interface Technology {
  name: string
  icon: React.ElementType
  percentage: number
}

interface TechnologySection {
  title: string
  technologies: Technology[]
}

export default function Technologies() {
  const { t } = useLanguage()
  const [animate, setAnimate] = useState(false)

  const technologySections: TechnologySection[] = [
    {
      title: t('technologies.frontend'),
      technologies: [
        { name: 'HTML5', icon: FaHtml5, percentage: 80 },
        { name: 'CSS3', icon: FaCss3Alt, percentage: 70 },
        { name: 'Bootstrap', icon: FaBootstrap, percentage: 70 },
        { name: 'Javascript', icon: FaJs, percentage: 65 },
        { name: 'Wordpress', icon: FaWordpress, percentage: 65 },
        { name: 'React', icon: FaReact, percentage: 60 },
        { name: 'Next.js', icon: SiNextdotjs, percentage: 60 },
        { name: 'TypeScript', icon: SiTypescript, percentage: 50 },
        { name: 'PHP', icon: FaPhp, percentage: 50 },
        { name: 'Sass', icon: FaSass, percentage: 50 },
      ],
    },
    {
      title: t('technologies.databases'),
      technologies: [
        { name: 'MySQL', icon: SiMysql, percentage: 50 },
        { name: 'MongoDB', icon: SiMongodb, percentage: 30 },
      ],
    },
    {
      title: t('technologies.uxui'),
      technologies: [
        { name: 'Figma', icon: FaFigma, percentage: 65 },
        { name: 'Adobe XD', icon: SiAdobexd, percentage: 60 },
        { name: 'Illustrator', icon: SiAdobeillustrator, percentage: 60 },
      ],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.technologies}>
      <h2 className="animate-slideInFromLeft">{t('technologies.title')}</h2>
      {technologySections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={styles.section}>
          <h3 className={`${styles.sectionTitle} animate-fadeIn`} style={{animationDelay: `${sectionIndex * 0.2}s`}}>
            {section.title}
          </h3>
          <div className={styles.techGrid}>
            {section.technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`${styles.techItem} animate-fadeIn`} 
                style={{animationDelay: `${(sectionIndex * section.technologies.length + index) * 0.1}s`}}
              >
                <tech.icon className={styles.techIcon} />
                <span className={styles.techName}>{tech.name}</span>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progress} 
                    style={{
                      width: animate ? `${tech.percentage}%` : '0%',
                      transition: 'width 1s ease-out',
                    }}
                  ></div>
                </div>
                <span className={styles.percentage}>{tech.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

