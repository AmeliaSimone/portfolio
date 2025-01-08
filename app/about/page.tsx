"use client";

import { useLanguage } from "../../context/language-context";
import Image from "next/image";
import styles from "./about.module.scss";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";

export default function About() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: FaCode,
      title: t("about.skill1.title"),
      description: t("about.skill1.description"),
    },
    {
      icon: FaLightbulb,
      title: t("about.skill2.title"),
      description: t("about.skill2.description"),
    },
    {
      icon: FaRocket,
      title: t("about.skill3.title"),
      description: t("about.skill3.description"),
    },
  ];

  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={`${styles.imageContainer} animate-fadeIn`}>
          <Image
            src="/images/profile.jpeg"
            alt="Profile picture"
            width={300}
            height={300}
            className={`${styles.image} animate-pulse`}
          />
        </div>

        <div className={styles.text}>
          <h2 className="animate-slideInFromRight">{t("about.title")}</h2>
          <p
            className="animate-slideInFromRight"
            dangerouslySetInnerHTML={{ __html: t("about.description") }}
          />

          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${styles.skillItem} animate-slideInFromBottom`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <skill.icon className={`${styles.skillIcon} animate-rotate`} />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
