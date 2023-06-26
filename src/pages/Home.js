import css from './pages.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook welcome page
      </h1>
    </div>
  );
}
