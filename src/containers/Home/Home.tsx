import React from 'react';
import { Element } from 'react-scroll';
import { Header } from '../Header';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.containerHeader}>
        <Header />
        {/* Hero */}
      </div>

      {/* Main */}
      <main className={styles.main}>
        <Element name="journey"></Element>
      </main>

      {/* Footer */}
    </div>
  );
};

export { Home };
