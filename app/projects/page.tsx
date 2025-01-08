'use client'

import { useLanguage } from '../../context/language-context'
import styles from './projects.module.scss'
import Image from 'next/image'

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: '/images/serviclick.png',
      link: 'https://serviclick.netlify.app/',
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: '/images/felicity.png',
      link: 'https://felicity360.netlify.app/',
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: '/images/serefimera.png',
      link: 'https://serefimera.netlify.app/',
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: '/images/banco.png',
      link: 'https://bancochile.netlify.app/',
    },
  ]

  return (
    <div className={styles.projects}>
      <h2 className="animate-slideInFromLeft">{t('projects.title')}</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.projectCard} animate-fadeIn`} style={{animationDelay: `${index * 0.2}s`}}>
            <div className={styles.imageContainer}>
              <Image 
                src={project.image} 
                alt={project.title} 
                layout="fill"
                objectFit="cover"
                className={styles.projectImage}
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.buttonContainer}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                {t('projects.viewProject')}
              </a>
            </div>
          </div>
        ))}
      </div>
      <h3>{t('projects.soon')}</h3>
    </div>
  )
}

