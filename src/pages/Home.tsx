import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { pageContainerVariants, pageItemVariants } from '../lib/motion';
import CaseStudyCard from '../components/CaseStudyCard/CaseStudyCard';
import LogoStrip from '../components/LogoStrip/LogoStrip';
import Typewriter from '../components/Typewriter/Typewriter';
import { getFeaturedStudies } from '../content/case-studies';
import styles from './Home.module.css';

const featuredStudies = getFeaturedStudies();

const TYPEWRITER_PHRASES = [
  '0→1 discovery',
  'Strategic UX Research',
  'Research Enablement',
];

const Home: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <motion.div
          className={styles.heroColumns}
          variants={shouldReduceMotion ? {} : pageContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
        >
          {/* Left — text */}
          <motion.div
            className={styles.heroText}
            variants={shouldReduceMotion ? {} : pageItemVariants}
          >
            <h1 id="hero-heading" className={styles.heroName}>
              Hi, I lead
              <br />
              <span className={styles.heroTypewriter}>
                <Typewriter phrases={TYPEWRITER_PHRASES} />
              </span>
            </h1>

            <div className={styles.heroSubline}>
              <p>As a Senior UX Researcher, leveraging strategic UXR to converge user needs with high-stakes business goals.</p>
              <p className={styles.heroSublineStatus}>Currently, open to senior research roles.</p>
            </div>
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            className={styles.heroPhotoCol}
            variants={shouldReduceMotion ? {} : pageItemVariants}
          >
            <img
              src="/case-studies/ayushi-cover.png"
              alt="Ayushi Chaudhary"
              className={styles.heroPhoto}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Logo strip ─────────────────────────────────────────────────── */}
      <LogoStrip />

      {/* ── Selected Work ─────────────────────────────────────────────── */}
      <section className={styles.workSection} aria-labelledby="work-heading">
        <div className={styles.workHeader}>
          <h2 id="work-heading" className={styles.sectionLabel}>
            Selected Work
          </h2>
        </div>

        <motion.div
          className={styles.projectList}
          variants={shouldReduceMotion ? {} : pageContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featuredStudies.map((study, i) => (
            <motion.div
              key={study.id}
              variants={shouldReduceMotion ? {} : pageItemVariants}
            >
              <CaseStudyCard study={study} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
