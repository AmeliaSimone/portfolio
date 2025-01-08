"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../../context/language-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import styles from "./header.module.scss";

export function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img src="/images/logo.png" alt="" />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/experience">{t("nav.experience")}</Link>
          <Link href="/projects">{t("nav.projects")}</Link>
          <Link href="/technologies">{t("nav.technologies")}</Link>
          <Link href="/languages-certifications">
            {t("nav.languagesCertifications")}
          </Link>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.languageToggle}
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <FaGlobe className={styles.languageIcon} />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            className={`${styles.menuToggle} ${
              isMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenuOverlay} ${
            isMenuOpen ? styles.open : ""
          }`}
          onClick={closeMenu}
        >
          <div
            className={`${styles.mobileMenuContent} ${
              isMenuOpen ? styles.open : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileMenuLinks}>
              <Link href="/about" onClick={closeMenu}>
                {t("nav.about")}
              </Link>
              <Link href="/experience" onClick={closeMenu}>
                {t("nav.experience")}
              </Link>
              <Link href="/projects" onClick={closeMenu}>
                {t("nav.projects")}
              </Link>
              <Link href="/technologies" onClick={closeMenu}>
                {t("nav.technologies")}
              </Link>
              <Link href="/languages-certifications" onClick={closeMenu}>
                {t("nav.languagesCertifications")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
