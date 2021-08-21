import classNames from 'classnames';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import * as workerTimers from 'worker-timers';
import PomoTraining1 from '../../../assets/images/projects/pomotraining-mobile-mockup-1.webp';
import PomoTraining2 from '../../../assets/images/projects/pomotraining-mobile-mockup-2.webp';
import PomoTraining3 from '../../../assets/images/projects/pomotraining-mobile-mockup-3.webp';
import SundaesOnDemand1 from '../../../assets/images/projects/sundaesondemand-mobile-mockup-1.webp';
import SundaesOnDemand2 from '../../../assets/images/projects/sundaesondemand-mobile-mockup-2.webp';
import SundaesOnDemand3 from '../../../assets/images/projects/sundaesondemand-mobile-mockup-3.webp';
import TrainrailHackathon1 from '../../../assets/images/projects/trainrailhackathon-mobile-mockup-1.webp';
import TrainrailHackathon2 from '../../../assets/images/projects/trainrailhackathon-mobile-mockup-2.webp';
import styles from './ProjectRandomImage.module.scss';

interface ProjectRandomImageProps {
  className?: string;
  startUpdate: boolean;
}

const ProjectRandomImage = (props: ProjectRandomImageProps): JSX.Element => {
  const { className, startUpdate } = props;
  const [willUpdate, setWillUpdate] = useState(startUpdate);

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

  const generateRandom = useCallback(() => {
    const lenImages = images.length;
    return Math.floor(Math.random() * lenImages);
  }, [images.length]);

  const [indexImage, setIndexImage] = useState(generateRandom());

  useEffect(() => {
    let countDownTimeout = workerTimers.setTimeout(() => {
      if (willUpdate) {
        setIndexImage(generateRandom());
      }
      setWillUpdate((prev) => !prev);
    }, 3000);

    return () => {
      if (countDownTimeout) {
        workerTimers.clearTimeout(countDownTimeout);
      }
    };
  }, [generateRandom, images.length, willUpdate]);

  return (
    <div className={classNames(className, styles.container)}>
      <Image
        src={images[indexImage]}
        alt="Screenshot de um projeto"
        width={220}
        height={450}
      />
    </div>
  );
};

export { ProjectRandomImage };
