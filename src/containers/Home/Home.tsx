import classNames from 'classnames';
import React from 'react';
import { Element } from 'react-scroll';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { MyJourney } from '../MyJourney';
import { MyResults } from '../MyResults';
import styles from './Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.containerHeader}>
        <Header className={styles.header} />
        {/* Hero */}
        <Hero className={styles.hero} />
      </div>

      {/* Main */}
      <main className={styles.main}>
        <Element
          name="journey"
          className={classNames(styles.section, styles.myJourneyWrapper)}
        >
          <MyJourney className={styles.myJourney} />
        </Element>
        <Element
          name="myresults"
          className={classNames(styles.section, styles.myResultsWrapper)}
        >
          <MyResults className={styles.myResults} />
        </Element>
      </main>

      {/* Footer */}
    </div>
  );
};

export { Home };
