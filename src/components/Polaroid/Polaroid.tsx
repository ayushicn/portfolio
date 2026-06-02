import React from 'react';
import styles from './Polaroid.module.css';

interface Props {
  src: string;
  caption: string;
  rotation?: string;   // CSS angle, e.g. '-2deg'
  onClick?: () => void;
}

const Polaroid: React.FC<Props> = ({ src, caption, rotation = '0deg', onClick }) => {
  return (
    <div
      className={styles.polaroid}
      style={{ transform: `rotate(${rotation})` }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      aria-label={onClick ? `View photo: ${caption}` : undefined}
    >
      <div className={styles.imageWrapper}>
        <img
          src={src}
          alt={caption}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
};

export default Polaroid;
