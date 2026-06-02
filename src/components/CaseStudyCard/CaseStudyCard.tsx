import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../../content/case-studies';
import styles from './CaseStudyCard.module.css';

interface Props {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<Props> = ({ study, index }) => {
  const isClickable = !study.comingSoon;
  const href = study.externalUrl ?? study.pitchUrl;

  const isSvg = study.coverImage.endsWith('.svg');
  const isBehance = study.isBehance ?? false;
  const isPitchLink = isClickable && href.includes('pitch.com');

  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const indexLabel = String(index + 1).padStart(2, '0');

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX + 16, y: e.clientY + 16 });
  };

  const imageEl = isBehance ? (
    <div className={styles.coverGradient} aria-label="Behance">
      <img src={study.coverImage} alt="Behance" className={styles.behanceIcon} loading="lazy" decoding="async" />
    </div>
  ) : isSvg ? (
    <img src={study.coverImage} alt="" className={styles.coverSvg} loading="lazy" decoding="async" />
  ) : (
    <img src={study.coverImage} alt="" className={styles.coverImg} loading="lazy" decoding="async" />
  );

  const rowContent = (
    <>
      {/* Text column */}
      <div className={styles.textCol}>
        <div className={styles.meta}>
          <span className={styles.index}>{indexLabel}</span>
          {study.comingSoon && (
            <span className={styles.comingSoonBadge}>Coming Soon</span>
          )}
        </div>

        <h2 className={styles.title}>{study.title}</h2>
        <p className={styles.description}>{study.description}</p>

        {study.tags.length > 0 && (
          <p className={styles.tags}>{study.tags.join(' | ')}</p>
        )}

        {isClickable && (
          <div className={styles.viewLink} aria-hidden="true">
            <span>View case study</span>
            <ArrowUpRight size={13} strokeWidth={2} />
          </div>
        )}
      </div>

      {/* Image column */}
      <div className={styles.imageCol}>
        {imageEl}
      </div>
    </>
  );

  if (!isClickable) {
    return (
      <article className={`${styles.row} ${styles.comingSoon}`} aria-label={`${study.title} — coming soon`}>
        {rowContent}
      </article>
    );
  }

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.row} ${styles.clickable}`}
        aria-label={`${study.title} — opens in new tab`}
        onMouseMove={isPitchLink ? handleMouseMove : undefined}
        onMouseEnter={isPitchLink ? () => setTooltipVisible(true) : undefined}
        onMouseLeave={isPitchLink ? () => setTooltipVisible(false) : undefined}
      >
        {rowContent}
      </a>

      {/* Cursor-following tooltip — rendered outside <a> so position:fixed works cleanly */}
      {isPitchLink && tooltipVisible && (
        <div
          className={styles.pitchTooltip}
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
          aria-hidden="true"
        >
          <img src="https://pitch.com/favicon.ico" width="13" height="13" alt="" />
          <span>Open in Pitch</span>
        </div>
      )}
    </>
  );
};

export default CaseStudyCard;
