import classNames from 'classnames';
import styles from './ButtonSection.module.scss';

interface ButtonSectionProps {
  className?: string;
  title: string;
}

const ButtonSection = (props: ButtonSectionProps): JSX.Element => {
  const { className, title } = props;

  return (
    <div className={classNames(className, styles.container)} data-title={title}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export { ButtonSection };
