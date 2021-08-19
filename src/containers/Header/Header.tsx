import classNames from 'classnames';
import { NavBar } from '../../components/NavBar';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { className } = props;
  return (
    <header className={classNames(className, styles.container)}>
      <NavBar />
    </header>
  );
};

export { Header };
