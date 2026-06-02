import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {year} Ayushi Chaudhary
        </p>
        <nav className={styles.links} aria-label="Footer links">
          <a
            href="mailto:135ayushichaudhary@gmail.com"
            className={styles.link}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ayushi-chaudhary-6a0b67118/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
