import React from 'react';
import styles from './AnimatedLink.module.css';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  accent?: boolean;
}

const AnimatedLink: React.FC<Props> = ({ accent, className, children, ...rest }) => {
  return (
    <a
      className={`${styles.link}${accent ? ` ${styles.accent}` : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default AnimatedLink;
