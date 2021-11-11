import classNames from 'classnames';
import { ButtonSection } from '../../components/ButtonSection';
import { DescriptionSection } from '../../components/DescriptionSection';
import { Book } from './Book';
import styles from './Books.module.scss';
import myBooks from './BooksData';

interface BooksProps {
  className?: string;
}

const Books = (props: BooksProps): JSX.Element => {
  const { className } = props;

  return (
    <section className={classNames(styles.container, className)}>
      <ButtonSection title="Books" className={styles.title} />
      <div className={styles.content}>
        <DescriptionSection className={styles.description}>
          I&apos;m making learning programming easier and more accessible.
        </DescriptionSection>
        <div className={styles.books}>
          {myBooks.map((item, index) => (
            <Book
              key={index}
              name={item.name}
              description={item.description}
              state={item.state}
              url={item.url}
              year={item.year}
              publisher={item.publisher}
              cover={item.cover}
              className={styles.book}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Books };
