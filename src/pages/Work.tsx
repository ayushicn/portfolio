import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { pageContainerVariants, pageItemVariants } from '../lib/motion';
import PageHeader from '../components/PageHeader/PageHeader';
import CaseStudyCard from '../components/CaseStudyCard/CaseStudyCard';
import { getAllStudies } from '../content/case-studies';
import styles from './Work.module.css';

const allStudies = getAllStudies();

const Work: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.page}
      variants={shouldReduceMotion ? {} : pageContainerVariants}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
    >
      <motion.div
        className={styles.inner}
        variants={shouldReduceMotion ? {} : pageItemVariants}
      >
        <PageHeader heading="Work" eyebrow="Case Studies" />
      </motion.div>

      <div className={styles.inner}>
        <motion.div
          className={styles.list}
          variants={shouldReduceMotion ? {} : pageContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
        >
          {allStudies.map((study, i) => (
            <motion.div
              key={study.id}
              variants={shouldReduceMotion ? {} : pageItemVariants}
            >
              <CaseStudyCard study={study} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
