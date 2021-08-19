import classNames from 'classnames';
import styles from './MenuHamburguer.module.scss';

interface MenuHamburguerProps {
  className?: string;
  opened: boolean;
}

const MenuHamburguer = (props: MenuHamburguerProps): JSX.Element => {
  const { className, opened } = props;

  return (
    <div
      className={classNames(className, styles.container)}
      data-menuiconopen={opened}
    >
      <span className={styles.spot} />
      <span className={styles.spot} />
      <span className={styles.spot} />
      <span className={styles.spot} />
      <span className={styles.spot} />
      <span className={styles.spot} />
      <span className={styles.spot} />
      <span className={styles.spot} />
      <span className={styles.spot} />
    </div>
  );
};

export { MenuHamburguer };
