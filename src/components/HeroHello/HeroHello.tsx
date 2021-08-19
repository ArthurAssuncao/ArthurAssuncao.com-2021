import bxLinkExternal from '@iconify/icons-bx/bx-link-external';
import { Icon } from '@iconify/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import * as workerTimers from 'worker-timers';
import PomoTraining1 from '../../assets/images/projects/pomotraining-mobile-mockup-1.webp';
import PomoTraining2 from '../../assets/images/projects/pomotraining-mobile-mockup-2.webp';
import PomoTraining3 from '../../assets/images/projects/pomotraining-mobile-mockup-3.webp';
import SundaesOnDemand1 from '../../assets/images/projects/sundaesondemand-mobile-mockup-1.webp';
import SundaesOnDemand2 from '../../assets/images/projects/sundaesondemand-mobile-mockup-2.webp';
import SundaesOnDemand3 from '../../assets/images/projects/sundaesondemand-mobile-mockup-3.webp';
import TrainrailHackathon1 from '../../assets/images/projects/trainrailhackathon-mobile-mockup-1.webp';
import TrainrailHackathon2 from '../../assets/images/projects/trainrailhackathon-mobile-mockup-2.webp';
import styles from './HeroHello.module.scss';

interface HeroHelloProps {
  className?: string;
}

const HeroHello = (props: HeroHelloProps): JSX.Element => {
  const { className } = props;
  const [indexImage1, setIndexImage1] = useState(0);
  const [indexImage2, setIndexImage2] = useState(2);
  const [whatImageChange, setWhatImageChange] = useState<1 | 2>(1);

  const images = [
    TrainrailHackathon1,
    TrainrailHackathon2,
    PomoTraining1,
    PomoTraining2,
    PomoTraining3,
    SundaesOnDemand1,
    SundaesOnDemand2,
    SundaesOnDemand3,
  ];

  let countDownTimeout1 = useRef<number>();

  useEffect(() => {
    const generateRandom = () => {
      const lenImages = images.length;
      return Math.floor(Math.random() * lenImages);
    };

    if (countDownTimeout1 && countDownTimeout1.current) {
      workerTimers.clearTimeout(countDownTimeout1.current);
    }

    countDownTimeout1.current = workerTimers.setTimeout(() => {
      if (whatImageChange == 1) {
        setIndexImage1(generateRandom());
      } else {
        setIndexImage2(generateRandom());
      }
      setWhatImageChange((prev) => (((prev + 1) % 3) + 1) as 1 | 2);
    }, 3000);
  });

  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.image}>
        <Image
          src={images[indexImage1]}
          alt="Screenshot de um projeto"
          width={220}
          height={450}
        />
      </div>
      <div className={styles.presentation}>
        <span className={styles.title}>Know my projects</span>
        <ul className={styles.projects}>
          <li className={styles.project}>
            <Link
              href="https://github.com/ArthurAssuncao/pomoTraining"
              passHref={false}
            >
              <a>
                <Icon icon={bxLinkExternal} className={styles.projectIcon} />
                <span className={styles.projectText}>PomoTraining</span>
              </a>
            </Link>
          </li>
          <li className={styles.project}>
            <Link
              href="https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br"
              passHref={true}
            >
              <a>
                <Icon icon={bxLinkExternal} className={styles.projectIcon} />
                <span className={styles.projectText}>
                  TrainRail Hackathon Landing page
                </span>
              </a>
            </Link>
          </li>
          <li className={styles.project}>
            <Link
              href="https://github.com/ArthurAssuncao/ifmakersd.com.br"
              passHref={true}
            >
              <a>
                <Icon icon={bxLinkExternal} className={styles.projectIcon} />
                <span className={styles.projectText}>IFMaker Landing page</span>
              </a>
            </Link>
          </li>
          <li className={styles.project}>
            <Link
              href="https://github.com/ArthurAssuncao/HelloSundae"
              passHref={true}
            >
              <a>
                <Icon icon={bxLinkExternal} className={styles.projectIcon} />
                <span className={styles.projectText}>Hello Sundae</span>
              </a>
            </Link>
          </li>
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
      <div className={styles.image}>
        <Image src={images[indexImage2]} alt="Screenshot de um projeto" />
      </div>
    </div>
  );
};

export { HeroHello };
