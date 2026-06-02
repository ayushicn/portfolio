import React, { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './Typewriter.module.css';

interface Props {
  phrases: string[];
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
}

const Typewriter: React.FC<Props> = ({
  phrases,
  pauseAfterType = 1800,
  pauseAfterDelete = 400,
  typeSpeed = 75,
  deleteSpeed = 42,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayed(phrases[0]);
      return;
    }

    const phrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < phrase.length) {
        // Type one character
        timeout = setTimeout(() => {
          setDisplayed(phrase.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        // Fully typed — pause, then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterType);
      }
    } else {
      if (displayed.length > 0) {
        // Delete one character
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Fully deleted — pause, then advance to next phrase
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        }, pauseAfterDelete);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIdx, shouldReduceMotion, phrases, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <span className={styles.wrapper} aria-label={phrases[phraseIdx]} aria-live="polite">
      <span aria-hidden="true">{displayed}</span>
      <span className={styles.cursor} aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
