import classNames from 'classnames';
import { HeroAbout } from '../../components/HeroAbout';
import { HeroHello } from '../../components/HeroHello';
import { HeroStory } from '../../components/HeroStory';
import styles from './Hero.module.scss';

interface HeroProps {
  className?: string;
}

const Hero = (props: HeroProps): JSX.Element => {
  const { className } = props;

  return (
    <section className={classNames(className, styles.container)}>
      <div className={styles.heroHelloWrapper}>
        <HeroHello className={styles.heroHello} />
      </div>
      <div className={styles.heroAboutWrapper}>
        <HeroAbout className={styles.heroAbout} />
      </div>
      <div className={styles.heroStoryWrapper}>
        <HeroStory className={styles.heroStory} />
      </div>
    </section>
  );
};

export { Hero };
