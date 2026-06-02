import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className={styles.root}>
      <Nav />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
