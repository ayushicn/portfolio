import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) closeMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => hamburgerRef.current?.focus(), 10);
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/" className={styles.logo} aria-label="Ayushi Chaudhary — Home">
            <span className={styles.logoName}>Ayushi Chaudhary</span>
          </NavLink>

          {/* Desktop links */}
          <ul className={styles.desktopLinks} role="list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            ref={hamburgerRef}
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <MobileMenu
        id="mobile-menu"
        isOpen={isMenuOpen}
        onClose={closeMenu}
        links={NAV_LINKS}
      />
    </>
  );
};

export default Nav;
