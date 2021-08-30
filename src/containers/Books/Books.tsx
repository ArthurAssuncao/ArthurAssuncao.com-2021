import classNames from 'classnames';
import { ButtonSection } from '../../components/ButtonSection';
import { Book } from './Book';
import styles from './Books.module.scss';
import myBooks from './BooksData';

interface BooksProps {
  className?: string;
}

const Books = (props: BooksProps): JSX.Element => {
  const { className } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <ButtonSection title="Books" className={styles.title} />
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
            className={styles.book}
          />
        ))}
      </div>
    </div>
  );
};

export { Books };
