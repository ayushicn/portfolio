import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import { pageContainerVariants, pageItemVariants } from '../lib/motion';
import { RESUME } from '../content/resume';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.page}
      variants={shouldReduceMotion ? {} : pageContainerVariants}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
    >
      <div className={styles.inner}>

        {/* ── Page header ───────────────────────────────────────────── */}
        <motion.div
          className={styles.pageHead}
          variants={shouldReduceMotion ? {} : pageItemVariants}
        >
          <h1 className={styles.heading}>Resume</h1>
          <a
            href="/resume.pdf"
            download="Ayushi_Chaudhary_SeniorUXR.pdf"
            className={`${styles.downloadBtn} no-print`}
            aria-label="Download resume as PDF"
          >
            <Download size={14} strokeWidth={2} />
            Download PDF
          </a>
        </motion.div>

        <hr className={styles.rule} aria-hidden="true" />

        {/* ── Name & contact ────────────────────────────────────────── */}
        <motion.section
          className={styles.section}
          variants={shouldReduceMotion ? {} : pageItemVariants}
          aria-label="Contact information"
        >
          <h2 className={styles.name}>{RESUME.name}</h2>
          <p className={styles.titleLine}>{RESUME.title}</p>
          <p className={styles.contact}>
            <a href={`mailto:${RESUME.email}`} className={styles.inlineLink}>
              {RESUME.email}
            </a>
            {' · '}
            {RESUME.phone}
            {' · '}
            {RESUME.location}
            {' · '}
            <a
              href={RESUME.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              LinkedIn
            </a>
          </p>
        </motion.section>

        <hr className={styles.sectionRule} aria-hidden="true" />

        {/* ── Profile ───────────────────────────────────────────────── */}
        <motion.section
          className={styles.section}
          variants={shouldReduceMotion ? {} : pageItemVariants}
          aria-labelledby="profile-heading"
        >
          <h3 id="profile-heading" className={styles.sectionHeading}>Profile</h3>
          {RESUME.profile.split('\n\n').map((para, i) => (
            <p key={i} className={`${styles.summaryText} ${i > 0 ? styles.summaryTextGap : ''}`}>
              {para}
            </p>
          ))}
        </motion.section>

        <hr className={styles.sectionRule} aria-hidden="true" />

        {/* ── Experience ────────────────────────────────────────────── */}
        <motion.section
          className={styles.section}
          variants={shouldReduceMotion ? {} : pageItemVariants}
          aria-labelledby="experience-heading"
        >
          <h3 id="experience-heading" className={styles.sectionHeading}>
            Professional Experience
          </h3>

          {RESUME.experience.map((role, i) => (
            <div key={i} className={styles.roleBlock}>
              {/* Role header */}
              <div className={styles.roleHeader}>
                <span className={styles.roleName}>
                  {role.role},&ensp;<em className={styles.roleCompany}>{role.company}</em>
                </span>
                <span className={styles.roleDates}>
                  {role.startDate} – {role.endDate}
                </span>
              </div>
              <p className={styles.roleLocation}>{role.location}</p>

              {/* Sub-sections with optional headings */}
              {role.groups.map((group, j) => (
                <div key={j} className={styles.roleGroup}>
                  {group.heading !== '' && (
                    <p className={styles.groupHeading}>{group.heading}</p>
                  )}
                  <ul className={styles.bulletList} role="list">
                    {group.bullets.map((bullet, k) => (
                      <li key={k} className={styles.bullet}>
                        <span className={styles.bulletDot} aria-hidden="true">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </motion.section>

        <hr className={styles.sectionRule} aria-hidden="true" />

        {/* ── Education ─────────────────────────────────────────────── */}
        <motion.section
          className={styles.section}
          variants={shouldReduceMotion ? {} : pageItemVariants}
          aria-labelledby="education-heading"
        >
          <h3 id="education-heading" className={styles.sectionHeading}>Education</h3>
          {RESUME.education.map((edu, i) => (
            <div key={i} className={styles.eduBlock}>
              <div className={styles.roleHeader}>
                <span className={styles.roleName}>{edu.degree}</span>
                <span className={styles.roleDates}>{edu.year}</span>
              </div>
              <p className={styles.roleLocation}>
                {edu.institution} · {edu.location}
              </p>
            </div>
          ))}
        </motion.section>

        <hr className={styles.sectionRule} aria-hidden="true" />

        {/* ── Skills ────────────────────────────────────────────────── */}
        <motion.section
          className={styles.section}
          variants={shouldReduceMotion ? {} : pageItemVariants}
          aria-labelledby="skills-heading"
        >
          <h3 id="skills-heading" className={styles.sectionHeading}>Skills</h3>
          <div className={styles.skillsPills}>
            {RESUME.skills.map((skill) => (
              <span key={skill} className={styles.skillPill}>{skill}</span>
            ))}
          </div>
        </motion.section>

        <hr className={styles.sectionRule} aria-hidden="true" />

        {/* ── Tools ─────────────────────────────────────────────────── */}
        <motion.section
          className={styles.section}
          variants={shouldReduceMotion ? {} : pageItemVariants}
          aria-labelledby="tools-heading"
        >
          <h3 id="tools-heading" className={styles.sectionHeading}>Tools</h3>
          <div className={styles.toolsGrid}>
            {RESUME.tools.map((group) => (
              <div key={group.category} className={styles.toolGroup}>
                <p className={styles.skillsLabel}>{group.category}</p>
                <p className={styles.skillsList}>{group.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
};

export default Resume;
