import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from './MobileMenu.module.css';

interface Props {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  links: { to: string; label: string }[];
}

const MobileMenu: React.FC<Props> = ({ id, isOpen, onClose, links }) => {
  const shouldReduceMotion = useReducedMotion();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus first link when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = document.querySelectorAll<HTMLElement>(
        `#${id} a[href], #${id} button`
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen, id]);

  const variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={styles.overlay}
          initial={shouldReduceMotion ? { opacity: 1, x: 0 } : variants.hidden}
          animate={variants.visible}
          exit={shouldReduceMotion ? { opacity: 1, x: 0 } : variants.hidden}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className={styles.header}>
            <NavLink to="/" className={styles.logo} onClick={onClose} aria-label="Home">
              AC
            </NavLink>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <X size={22} strokeWidth={1.75} />
            </button>
          </div>

          {/* Nav links */}
          <nav className={styles.nav} aria-label="Mobile navigation">
            {links.map(({ to, label }, i) => (
              <NavLink
                key={to}
                to={to}
                ref={i === 0 ? firstLinkRef : undefined}
                className={({ isActive }) =>
                  `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`
                }
                onClick={onClose}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Social links */}
          <div className={styles.footer}>
            <div className={styles.socialLinks}>
              <a
                href="mailto:135ayushichaudhary@gmail.com"
                className={styles.socialLink}
                onClick={onClose}
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/ayushi-chaudhary-6a0b67118/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/135ayushichaudhary"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Behance
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
