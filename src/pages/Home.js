import css from './pages.module.css';
import notebookDesk from '../images/notebook-desk.png';
import notebookTab from '../images/notebook-tab.png';
import notebookMob from '../images/notebook-mob.png';

export default function Home() {
  return (
    <div className={css.container}>
      <p className={css.description}>
        <span className={css.within}>Within</span> the pages of my personal
        contact book, a symphony of names and numbers dance harmoniously,
        capturing the essence of the meaningful connections that enrich my
        journey and remind me of the extraordinary people who have touched my
        life!
      </p>

      <picture className={css['image-wrapper']}>
      <source
                media="(max-width: 767px)"
                srcSet={`${notebookMob}`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1199px)"
                srcSet={`${notebookTab}`}
              />
              <source
                media="(min-width: 1200px)"
                srcSet={`${notebookDesk}`}
              />
        <img src={notebookMob} alt="Notebook" />
      </picture>
    </div>
  );
}
