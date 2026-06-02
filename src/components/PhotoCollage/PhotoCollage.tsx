import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './PhotoCollage.module.css';

interface CollagePhoto {
  src: string;
  caption: string;
  objectPosition?: string;
}

interface Props {
  photos: CollagePhoto[];
  bioParagraphs: string[];
}

// Each cell fade-up on scroll
const cell = (delay: number, reduceMotion: boolean) => ({
  initial: reduceMotion ? {} : { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: reduceMotion ? {} : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const PhotoCollage: React.FC<Props> = ({ photos, bioParagraphs }) => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Map photos by caption for easy lookup
  const byCaption: Record<string, CollagePhoto> = {};
  photos.forEach((p) => { byCaption[p.caption] = p; });

  const img = (caption: string) => {
    const p = byCaption[caption];
    if (!p) return null;
    return (
      <img
        src={p.src}
        alt={p.caption}
        className={styles.photo}
        style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
        loading="lazy"
        decoding="async"
      />
    );
  };

  const hover = (caption: string) => (
    <span className={styles.hoverCaption}>{byCaption[caption]?.caption}</span>
  );

  return (
    <div className={styles.grid}>

      {/* 1 — dance crew (row 1, col 1) */}
      <motion.div className={`${styles.cell} ${styles.dance}`} {...cell(0, shouldReduceMotion)}>
        {img('Dance Crew')}
        {hover('Dance Crew')}
      </motion.div>

      {/* 2 — TUD (rows 1–2, col 2) — LARGE */}
      <motion.div className={`${styles.cell} ${styles.tud}`} {...cell(0.06, shouldReduceMotion)}>
        {img('First day at TUD')}
        {hover('First day at TUD')}
      </motion.div>

      {/* 3 — First Snow Czech (rows 1–2, col 3) — LARGE */}
      <motion.div className={`${styles.cell} ${styles.snow}`} {...cell(0.12, shouldReduceMotion)}>
        {img('First Snow @ Czech')}
        {hover('First Snow @ Czech')}
      </motion.div>

      {/* 5 — Graduation Day (row 3, cols 1–2) — LARGE */}
      <motion.div className={`${styles.cell} ${styles.grad}`} {...cell(0.22, shouldReduceMotion)}>
        {img('Graduation Day ♥')}
        {hover('Graduation Day ♥')}
      </motion.div>

      {/* Bio column — col 3, rows 3-6, bottom-aligned text */}
      <motion.div
        className={styles.bioColumn}
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={shouldReduceMotion ? {} : { duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.bioColumnInner}>
          {bioParagraphs.map((para, i) => (
            <p key={i} className={styles.bioColumnPara}>{para}</p>
          ))}
        </div>
      </motion.div>

      {/* 6 — Retreat Germany (row 6, col 1) */}
      <motion.div className={`${styles.cell} ${styles.retreat}`} {...cell(0.28, shouldReduceMotion)}>
        {img('Retreat in Germany')}
        {hover('Retreat in Germany')}
      </motion.div>

      {/* 7 — KLM (rows 4–5, col 1) — LARGE */}
      <motion.div className={`${styles.cell} ${styles.klm}`} {...cell(0.32, shouldReduceMotion)}>
        {img('UXR @ KLM')}
        {hover('UXR @ KLM')}
      </motion.div>

      {/* 9 — Sattvic Diet (row 6, col 2) */}
      <motion.div className={`${styles.cell} ${styles.sattvic}`} {...cell(0.42, shouldReduceMotion)}>
        {img('Sattvic Diet')}
        {hover('Sattvic Diet')}
      </motion.div>

      {/* 10 — Shit Project (row 5, col 2) */}
      <motion.div className={`${styles.cell} ${styles.shitproj}`} {...cell(0.48, shouldReduceMotion)}>
        {img('Shit Project')}
        {hover('Shit Project')}
      </motion.div>

      {/* 11 — Whatfix First Day (row 4, col 2) — above Shit Project */}
      <motion.div className={`${styles.cell} ${styles.whatfix}`} {...cell(0.52, shouldReduceMotion)}>
        {img('Whatfix First Day')}
        {hover('Whatfix First Day')}
      </motion.div>

      {/* 12 — Dorp Design Village (row 6, col 3) */}
      <motion.div className={`${styles.cell} ${styles.dorp}`} {...cell(0.56, shouldReduceMotion)}>
        {img('Dorp Design Village')}
        {hover('Dorp Design Village')}
      </motion.div>

    </div>
  );
};

export default PhotoCollage;
