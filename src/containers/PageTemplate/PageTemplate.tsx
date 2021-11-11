import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '../../components/Loading';
import { Header } from '../Header';
import styles from './PageTemplate.module.scss';

const LocalLoading = () => <Loading />;

const Footer = dynamic(import('../Footer'), {
  loading: LocalLoading,
});
const ButtonScrollToTop = dynamic(import('../../components/ButtonScrollToTop'));

interface PageTemplateProps {
  children: ReactNode;
  hero?: ReactNode;
}

const PageTemplate = (props: PageTemplateProps): JSX.Element => {
  const { children, hero } = props;

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.headerHero}>
        <Header />
        {hero}
      </div>
      {children}
      <ButtonScrollToTop className={styles.buttonToTop} />
      <Footer />
    </div>
  );
};

export { PageTemplate };
