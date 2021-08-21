import bxLinkExternal from '@iconify/icons-bx/bx-link-external';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import Link from 'next/link';
import nextId from 'react-id-generator';
import styles from './HeroHello.module.scss';
import { ProjectRandomImage } from './ProjectRandomImage';

interface HeroHelloProps {
  className?: string;
}

const HeroHello = (props: HeroHelloProps): JSX.Element => {
  const { className } = props;

  const projects = [
    {
      link: 'https://github.com/ArthurAssuncao/pomoTraining',
      text: 'PomoTraining',
    },
    {
      link: 'https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br',
      text: 'TrainRail Hackathon website',
    },
    {
      link: 'https://github.com/ArthurAssuncao/ifmakersd.com.br',
      text: 'Laboratório IFMaker website',
    },
    {
      link: 'https://github.com/ArthurAssuncao/HelloSundae',
      text: 'HelloSundae',
    },
  ];

  return (
    <div className={classNames(className, styles.container)}>
      <ProjectRandomImage className={styles.image} startUpdate={true} />
      <div className={styles.presentation}>
        <span className={styles.title}>Know my projects</span>
        <ul className={styles.projects}>
          {projects.map((project) => (
            <li className={styles.project} key={nextId()}>
              <Link href={project.link} passHref={false}>
                <a>
                  <Icon icon={bxLinkExternal} className={styles.projectIcon} />
                  <span className={styles.projectText}>{project.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.textWrapper}>
          <div className={styles.textInnerWrapper}>
            <span className={styles.text}>Hi,</span>
            <span className={styles.text}>I am Arthur</span>
            <span className={styles.description}>
              Professor / Web Developer
            </span>
          </div>
        </div>
      </div>
      <ProjectRandomImage className={styles.image} startUpdate={false} />
    </div>
  );
};

export { HeroHello };
