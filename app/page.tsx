'use client'

import { useLanguage } from '../context/language-context'
import styles from './page.module.scss'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className={styles.home}>
      <div className={styles.backgroundImage} />
      <div className={styles.content}>
        <h1 className={`${styles.title} animate-slideInFromLeft`}>
          <span className={styles.greeting}>{t('home.title')}</span>
          <span className={styles.name}>{t('home.name')}</span>
          <span className={styles.role}>{t('home.role')}</span>
        </h1>
        
        <div className={`${styles.socialIcons} animate-fadeIn`}>
          <Link href="https://www.linkedin.com/in/amfeliu" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/AmeliaSimone" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
          <Link href="https://wa.me/967585330" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </Link>
        </div>
        
        <a 
          href="../docs/CV.AmeliaF.pdf" 
          download 
          className={`${styles.downloadButton} animate-slideInFromBottom`}
        >
          {t('home.download')}
        </a>
      </div>
    </div>
  )
}

