import classNames from 'classnames';
import styles from './ButtonSection.module.scss';

interface ButtonSectionProps {
  className?: string;
  title: string;
}

const ButtonSection = (props: ButtonSectionProps): JSX.Element => {
  const { className, title } = props;
  const buttonTitle = `{ ${title} }`;

  return (
    <div
      className={classNames(className, styles.container)}
      data-title={buttonTitle}
    >
      <span className={styles.title}>{buttonTitle}</span>
    </div>
  );
};

export { ButtonSection };
