import classNames from 'classnames';
import React from 'react';
import { ButtonSection } from '../../components/ButtonSection';
import { ContactForm } from '../../components/ContactForm';
import { SocialButtons } from '../../components/SocialButtons';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps): JSX.Element => {
  const { className } = props;

  return (
    <footer className={classNames(className, styles.container)}>
      <ButtonSection title="Contact" className={styles.title} />
      <ContactForm className={styles.contact} />
      <SocialButtons className={styles.socialButtons} />
      <div className={styles.copyright}>Created by Arthur Assuncao @ 2021</div>
    </footer>
  );
};

export { Footer };
