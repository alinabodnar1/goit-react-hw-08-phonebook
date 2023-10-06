import React from 'react';
import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.description}>
        Created by{' '}
        <a href="https://github.com/alinabodnar1" className={css.link}>
          alinabodnar1
        </a>{' '}
        as a homework for courses GoIt 📖 🖌
      </p>
    </footer>
  );
};
