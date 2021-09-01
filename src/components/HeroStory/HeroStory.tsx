import classNames from 'classnames';
import styles from './HeroStory.module.scss';
import myStory from './Story';

interface HeroStoryProps {
  className?: string;
}

const HeroStory = (props: HeroStoryProps): JSX.Element => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      <span className={styles.title}>A piece of my story</span>
      <div className={styles.text}>
        {myStory.map((paragraph: string, index: number) => {
          return (
            <span className={styles.paragraph} key={index}>
              {paragraph.startsWith('"') && paragraph.endsWith('"') ? (
                <blockquote className={styles.quotation}>
                  {paragraph.replace(/"/g, '')}
                </blockquote>
              ) : (
                paragraph
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export { HeroStory };
