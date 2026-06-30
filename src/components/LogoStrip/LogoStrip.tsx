import React from 'react';
import styles from './LogoStrip.module.css';

interface Logo {
  src: string;
  alt: string;
  className: string;
}

const LOGOS: Logo[] = [
  {
    src: '/case-studies/delft-university-of-technology-logo.svg',
    alt: 'TU Delft',
    className: 'tudelft',
  },
  {
    src: '/case-studies/KLM_logo.svg',
    alt: 'KLM',
    className: 'klm',
  },
  {
    src: '/case-studies/Art_of_Living_.svg',
    alt: 'The Art of Living',
    className: 'artOfLiving',
  },
  {
    src: '/case-studies/Whatfix_Logo.png',
    alt: 'Whatfix',
    className: 'whatfix',
  },
];

const LogoSet: React.FC<{ withAlt?: boolean }> = ({ withAlt = false }) => (
  <div className={styles.logoSet}>
    {LOGOS.map((logo) => (
      <div key={logo.alt} className={styles.logoItem}>
        <img
          src={logo.src}
          alt={withAlt ? logo.alt : ''}
          className={`${styles.logoImg} ${styles[logo.className]}`}
          decoding="async"
        />
      </div>
    ))}
  </div>
);

const LogoStrip: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Shaped by experiences at</p>

      <div className={styles.strip}>
        <div className={styles.scrollArea} aria-hidden="true">
          <div className={styles.track}>
            <LogoSet withAlt />
            <LogoSet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
