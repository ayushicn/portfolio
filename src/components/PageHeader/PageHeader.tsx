import React from 'react';
import styles from './PageHeader.module.css';

interface Props {
  eyebrow?: string;
  heading: string;
  rule?: boolean;
}

const PageHeader: React.FC<Props> = ({ eyebrow, heading, rule = true }) => {
  return (
    <div className={styles.wrapper}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h1 className={styles.heading}>{heading}</h1>
      {rule && <hr className={styles.rule} />}
    </div>
  );
};

export default PageHeader;
