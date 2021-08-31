import githubSquare from '@iconify/icons-fa-brands/github-square';
import linkedinIcon from '@iconify/icons-logos/linkedin-icon';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import CvIcon from '../../assets/images/curriculum-svgrepo-com.svg';
import LattesIcon from '../../assets/images/lattes-square.svg';
import styles from './SocialButtons.module.scss';

interface SocialButtonsProps {
  className?: string;
}
interface SocialButtonProps {
  className?: string;
  name: string;
  href: string;
  children: ReactNode;
}

const SocialButton = (props: SocialButtonProps): JSX.Element => {
  const { name, href, className, children } = props;
  return (
    <Link href={href} passHref={true}>
      <a className={classNames(className, styles.sbIconWrapper)} title={name}>
        {children}
      </a>
    </Link>
  );
};

const SocialButtons = (props: SocialButtonsProps): JSX.Element => {
  const { className } = props;
  return (
    <div className={classNames(className, styles.container)}>
      <SocialButton
        name="Github"
        className={styles.iconWrapper}
        href="https://github.com/arthurassuncao"
      >
        <div className={classNames(styles.image, styles.githubIcon)}>
          <Icon icon={githubSquare} />
        </div>
      </SocialButton>
      <SocialButton
        name="LinkedIn"
        className={styles.iconWrapper}
        href="https://www.linkedin.com/in/arthurassuncao"
      >
        <div className={classNames(styles.image, styles.linkedinIcon)}>
          <Icon icon={linkedinIcon} />
        </div>
      </SocialButton>
      <SocialButton
        name="Lattes"
        className={classNames(styles.iconWrapper, styles.lattesIconWrapper)}
        href="http://lattes.cnpq.br/8136835668168874"
      >
        <Image
          src={LattesIcon}
          alt="Lattes"
          height={48}
          width={48}
          className={classNames(styles.image, styles.lattesIcon)}
        />
      </SocialButton>
      <SocialButton
        name="Curriculum"
        className={classNames(styles.iconWrapper, styles.cvIconWrapper)}
        href="../../assets/files/resume_arthur_assuncao_one-page.pdf"
      >
        <Image
          src={CvIcon}
          alt="Curriculum"
          height={42}
          width={48}
          className={classNames(styles.image, styles.cvIcon)}
        />
      </SocialButton>
    </div>
  );
};

export { SocialButtons };
