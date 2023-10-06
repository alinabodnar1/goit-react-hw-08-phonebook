import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from '../Footer/Footer';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <div className={css.main}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </div>

      <Footer />
    </div>
  );
};
