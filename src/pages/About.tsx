import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { BIO } from '../content/bio';
import PhotoCollage from '../components/PhotoCollage/PhotoCollage';
import styles from './About.module.css';

const COLLAGE_BIO: string[] = [
  'I ask a lot of questions.',
  'The kind that start with "Why?"',
  'That\'s what drew me to UX Research. I love stepping into messy, ambiguous spaces; whether it\'s a multi-persona SaaS product, a 0→1 bet, or an AI feature that doesn\'t come with a playbook; and figuring out what\'s actually going on beneath the surface.',
  'My job isn\'t just to collect feedback. It\'s to challenge assumptions, spot patterns others might miss, and bring the user\'s perspective into conversations where important product decisions are made. I\'ve spent my days translating human behavior into product direction, helping teams build things that make sense not just on paper, but in people\'s lives.',
  'Outside of work, my curiosity doesn\'t clock out. You\'ll usually find me reading about geopolitics, investing, human behavior, nutrition, longevity, or some rabbit hole I accidentally fell into at midnight.',
  'When I\'m not doing that, I\'m probably dancing, meditating, experimenting with Ayurvedic living, or exploring ideas from ancient Indian philosophy. Research has taught me that good answers come from asking better questions. The rest of life keeps proving the same thing.',
];

const About: React.FC = () => {
  useReducedMotion();

  const photos = BIO.polaroids.map((p) => ({
    src: p.src,
    caption: p.caption,
    ...('objectPosition' in p ? { objectPosition: p.objectPosition as string } : {}),
  }));

  return (
    <div className={styles.page}>

      {/* ── Collage ────────────────────────────────────────────────── */}
      <section className={styles.collageSection} aria-label="Personal photos">
        <PhotoCollage
          photos={photos}
          bioParagraphs={COLLAGE_BIO}
        />
      </section>

    </div>
  );
};

export default About;
