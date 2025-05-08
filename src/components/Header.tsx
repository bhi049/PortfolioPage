import React from 'react';
import styles from '../styles/header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>Portfolio</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.link}>About Me</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#contact" className={styles.link}>Contact</a>
          <a href="/cv.pdf" className={styles.link}>CV</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;