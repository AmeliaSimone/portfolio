'use client'

import { useLanguage } from '../../context/language-context'
import styles from './experience.module.scss'

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t('experience.job1.title'),
      company: t('experience.job1.company'),
      period: t('experience.job1.period'),
      description: t('experience.job1.description'),
    },
    {
      title: t('experience.job2.title'),
      company: t('experience.job2.company'),
      period: t('experience.job2.period'),
      description: t('experience.job2.description'),
    },
  ]

  return (
    <div className={styles.experience}>
      <h2 className="animate-slideInFromLeft">{t('experience.title')}</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={`${styles.timelineItem} animate-fadeIn`} style={{animationDelay: `${index * 0.3}s`}}>
            <div className={styles.timelineContent}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className={styles.period}>{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

