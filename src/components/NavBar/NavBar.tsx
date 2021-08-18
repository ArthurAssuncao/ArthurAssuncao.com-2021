import classNames from 'classnames';
import Image from 'next/image';
import Logo from './../../assets/images/arthur-logo-so-A.svg';
import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { className } = props;
  return (
    <nav className={classNames(className, styles.container)}>
      <div className={styles.logoWrapper}>
        <Image
          src={Logo}
          alt="Logo"
          height={60}
          width={41}
          className={styles.logo}
        />
        <span className={styles.logoText}>Assuncao</span>
      </div>
    </nav>
  );
};

export { NavBar };
