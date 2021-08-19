import classNames from 'classnames';
import Image from 'next/image';
import Me from './../../assets/images/profile-pic-square.webp';
import styles from './HeroAbout.module.scss';

interface HeroAboutProps {
  className?: string;
}

const HeroAbout = (props: HeroAboutProps): JSX.Element => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.imageWrapper}>
        <Image
          src={Me}
          alt="Arthur photo"
          height={128}
          width={110}
          className={styles.image}
        />
      </div>
      <div className={styles.title}>
        Development with Components, most used stacks, mobile first and
        performance careful
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Reactive and functional development with ReactJS, TypeScript and Jest
          for unit testing (TDD), thus providing a more reliable code and easy
          maintenance.
        </li>
        <li className={styles.listItem}>
          CSS code using otimizations and conventions, like SASS and BEM.
        </li>
        <li className={styles.listItem}>Server rendering with Next.js.</li>
        <li className={styles.listItem}>
          All commits with my git workflow and messages with commit conventions.
        </li>
        <li className={styles.listItem}>
          Continuos Integrations with CircleCI or another one.
        </li>
        <li className={styles.listItem}>Beautiful designs</li>
        <li className={styles.listItem}>And many stuffs...</li>
      </ul>
    </div>
  );
};

export { HeroAbout };
