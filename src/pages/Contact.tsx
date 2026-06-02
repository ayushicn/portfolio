import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { pageContainerVariants, pageItemVariants } from '../lib/motion';
import AnimatedLink from '../components/AnimatedLink/AnimatedLink';
import { BIO } from '../content/bio';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.page}
      variants={shouldReduceMotion ? {} : pageContainerVariants}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
    >
      <div className={styles.inner}>
        <motion.h1
          className={styles.heading}
          variants={shouldReduceMotion ? {} : pageItemVariants}
        >
          Get in touch
        </motion.h1>

        <motion.p
          className={styles.intro}
          variants={shouldReduceMotion ? {} : pageItemVariants}
        >
          The best way to reach me is by email. I usually reply within a day or two.
        </motion.p>

        <motion.nav
          className={styles.links}
          aria-label="Contact links"
          variants={shouldReduceMotion ? {} : pageContainerVariants}
        >
          <motion.div variants={shouldReduceMotion ? {} : pageItemVariants}>
            <AnimatedLink
              href={`mailto:${BIO.contact.email}`}
              className={styles.contactLink}
              aria-label={`Email: ${BIO.contact.email}`}
            >
              Gmail
            </AnimatedLink>
          </motion.div>

          <motion.div variants={shouldReduceMotion ? {} : pageItemVariants}>
            <AnimatedLink
              href={BIO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
              aria-label="LinkedIn profile, opens in new tab"
            >
              LinkedIn
            </AnimatedLink>
          </motion.div>
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default Contact;
