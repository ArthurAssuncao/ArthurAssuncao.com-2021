import classNames from 'classnames';
import React from 'react';
import { Element } from 'react-scroll';
import { Article } from '../../lib/DevToApi/interfaces';
import { BlogPosts } from '../BlogPosts';
import { Books } from '../Books';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { MyJourney } from '../MyJourney';
import { MyResults } from '../MyResults';
import { Skills } from '../Skills';
import { Videos } from '../Videos';
import styles from './Home.module.scss';

interface HomeProps {
  posts: Article[];
}

const Home = (props: HomeProps): JSX.Element => {
  const { posts } = props;
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
        <Element
          name="skills"
          className={classNames(styles.section, styles.mySkillsWrapper)}
        >
          <Skills className={styles.mySkills} />
        </Element>
        <Element
          name="posts"
          className={classNames(styles.section, styles.myBlogPostsWrapper)}
        >
          <BlogPosts className={styles.myBlogPosts} posts={posts} />
        </Element>
        <Element
          name="courses"
          className={classNames(styles.section, styles.videosWrapper)}
        >
          <Videos className={styles.videos} />
        </Element>
        <Element
          name="books"
          className={classNames(styles.section, styles.booksWrapper)}
        >
          <Books className={styles.books} />
        </Element>
      </main>

      {/* Footer */}
      <Element name="footer" className={classNames(styles.footerWrapper)}>
        <Footer />
      </Element>
    </div>
  );
};

export { Home };
