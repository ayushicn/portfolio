import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './PhotoCarousel.module.css';

export interface CarouselPhoto {
  src: string;
  caption: string;
  objectPosition?: string;
}

interface Props {
  photos: CarouselPhoto[];
  autoAdvanceMs?: number;
}

const ITEM_SIZE = 240;   // base photo size (px)
const GAP = 24;          // gap between photos (px)
const ITEM_STRIDE = ITEM_SIZE + GAP;
const ACTIVE_SCALE = 1.38;
const AUTO_MS = 4000;

const PhotoCarousel: React.FC<Props> = ({ photos, autoAdvanceMs = AUTO_MS }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Measure container on mount and resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // Auto-advance
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIdx((prev) => (prev + 1) % photos.length);
      }
    }, autoAdvanceMs);
  }, [autoAdvanceMs, isPaused, photos.length]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  // Pause on hover
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) startTimer();
  }, [isPaused, startTimer]);

  const goTo = useCallback((idx: number) => {
    setActiveIdx(((idx % photos.length) + photos.length) % photos.length);
    // Reset timer so next auto-advance waits a full interval
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  }, [photos.length, startTimer]);

  // Strip x offset so active photo centres in viewport
  const stripX = containerWidth > 0
    ? containerWidth / 2 - activeIdx * ITEM_STRIDE - ITEM_SIZE / 2
    : 0;

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Left arrow ─────────────────────────────────────────── */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => goTo(activeIdx - 1)}
        aria-label="Previous photo"
      >
        <ChevronLeft size={20} strokeWidth={1.75} />
      </button>

      {/* ── Strip viewport ─────────────────────────────────────── */}
      <div
        ref={containerRef}
        className={styles.viewport}
        aria-label="Personal photo carousel"
        role="region"
      >
        <motion.div
          className={styles.strip}
          animate={{ x: shouldReduceMotion ? 0 : stripX }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 220, damping: 28, mass: 0.9 }
          }
        >
          {photos.map((photo, i) => {
            const isActive = i === activeIdx;
            const dist = Math.abs(i - activeIdx);

            return (
              <motion.figure
                key={photo.src}
                className={styles.photoItem}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: isActive ? ACTIVE_SCALE : 1,
                        opacity: dist === 0 ? 1 : dist === 1 ? 0.55 : 0.3,
                        zIndex: isActive ? 10 : 1,
                      }
                }
                transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                onClick={() => goTo(i)}
                role="button"
                tabIndex={0}
                aria-label={isActive ? photo.caption : `Go to photo: ${photo.caption}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') goTo(i); }}
              >
                <div className={`${styles.photoFrame} ${isActive ? styles.frameActive : ''}`}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className={styles.photoImg}
                    style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Caption slides up on active */}
                  <motion.div
                    className={styles.captionOverlay}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className={styles.captionText}>{photo.caption}</span>
                  </motion.div>
                </div>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>

      {/* ── Right arrow ────────────────────────────────────────── */}
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => goTo(activeIdx + 1)}
        aria-label="Next photo"
      >
        <ChevronRight size={20} strokeWidth={1.75} />
      </button>

      {/* ── Dots ───────────────────────────────────────────────── */}
      <div className={styles.dots} role="tablist" aria-label="Photo navigation">
        {photos.map((photo, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={`Go to ${photo.caption}`}
            className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
