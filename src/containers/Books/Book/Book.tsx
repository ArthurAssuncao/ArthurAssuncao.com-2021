import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../components/Button';
import { BookData } from '../BooksData';
import Logo from './../../../assets/images/arthur-logo-so-A.svg';
import styles from './Book.module.scss';

interface BookProps extends BookData {
  className?: string;
}

const Book = (props: BookProps): JSX.Element => {
  const { className, name, year, publisher, description, url } = props;
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.cover}>
        <div className={styles.logoWrapper}>
          <Image
            src={Logo}
            alt="Logo"
            height={30}
            width={20}
            className={styles.logo}
          />
        </div>
        <div className={styles.border}></div>
        <div className={styles.front}>
          <span className={styles.publisher}>{publisher}</span>
          <span className={styles.title}>{name}</span>
          <div className={styles.authorYearWrapper}>
            <span className={styles.author}>Arthur Assuncao</span>
            <span className={styles.year}>{year}</span>
          </div>
        </div>
        <ul className={styles.pages}>
          <li className={styles.page}></li>
          <li className={styles.page}></li>
          <li className={styles.page}></li>
          <li className={styles.page}></li>
          <li className={styles.page}></li>
          <li className={styles.page}></li>
        </ul>
        <div className={styles.back}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <Link href={url} passHref={true}>
            <span className={styles.title}>
              <a>{name}</a>
            </span>
          </Link>
          <span className={styles.description}>{description}</span>
          <span className={styles.year}>Updated in {year}</span>
        </div>
        <Button animated={false} className={styles.button}>
          <Link href={url} passHref={true}>
            <a>Access</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export { Book };
