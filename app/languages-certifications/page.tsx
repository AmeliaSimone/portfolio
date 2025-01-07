"use client";

import { useLanguage } from "../../context/language-context";
import styles from "./languages-certifications.module.scss";
import { FaLanguage, FaCertificate, FaSchool } from "react-icons/fa";

export default function LanguagesCertifications() {
  const { t } = useLanguage();

  const languages = [
    { name: t("languages.language1"), level: t("languages.level1") },
    { name: t("languages.language2"), level: t("languages.level2") },
  ];

  const certifications = [
    { name: t("certifications.cert1"), file: "../docs/udemy.pdf" },
    { name: t("certifications.cert2"), file: "../docs/specialisterne.pdf" },
    { name: t("certifications.cert3"), file: "../docs/coderhouse.pdf" },
  ];

  const education = [
    { name: t("education.edu1"), file: "../docs/udemy.pdf" },
    { name: t("education.edu2"), file: "../docs/specialisterne.pdf" },
    { name: t("education.edu3"), file: "../docs/coderhouse.pdf" },
  ];

  
  const handleDownload = (file: string): void => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "download";
    link.click();
  };

  return (
    <div className={styles.languagesCertifications}>
      <h2 className="animate-slideInFromLeft">{t("name")}</h2>
      <p className={`${styles.subtitle} animate-fadeIn`}>
        {t("languages.subtitle")}
      </p>

      <div className={styles.content}>
        <div
          className={`${styles.section} ${styles.education} animate-slideInFromRight`}
        >
          <h3>
            <FaSchool className={styles.icon} />{" "}
            {t("education.title")}
          </h3>
          <ul>
            {education.map((cert, index) => (
              <li
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span>{cert.name}</span>
               
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${styles.section} ${styles.languages} animate-slideInFromLeft`}
        >
          <h3>
            <FaLanguage className={styles.icon} /> {t("languages.title")}
          </h3>
          <ul>
            {languages.map((lang, index) => (
              <li
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className={styles.languageName}>{lang.name}</span>
                <span className={styles.languageLevel}>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${styles.section} ${styles.certifications} animate-slideInFromRight`}
        >
          <h3>
            <FaCertificate className={styles.icon} />{" "}
            {t("certifications.title")}
          </h3>
          <ul>
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span>{cert.name}</span>
                <button
                  className={styles.downloadButton}
                  onClick={() => handleDownload(cert.file)}
                >
                  {t("certifications.download")}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
