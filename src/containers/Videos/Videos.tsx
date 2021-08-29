import classNames from 'classnames';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import * as workerTimers from 'worker-timers';
import { ButtonSection } from '../../components/ButtonSection';
import { Video } from './Video';
import styles from './Videos.module.scss';
import videos from './VideosData';

interface VideosProps {
  className?: string;
}

const Videos = (props: VideosProps): JSX.Element => {
  const { className } = props;
  const numberVideos = videos.length;
  const [active, setActive] = useState(Math.floor(numberVideos / 2));
  const carouselTime = 5000;

  const cardToggle = (index: number) => {
    if (index !== active) {
      setActive(index);
    }
  };

  const nextCard = () => {
    if (active + 1 < numberVideos) {
      cardToggle(active + 1);
      return;
    }
    cardToggle(0);
  };

  const prevCard = () => {
    if (active - 1 > 0) {
      cardToggle(active - 1);
      return;
    }
    cardToggle(numberVideos);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => prevCard(),
    onSwipedRight: () => nextCard(),
  });

  let countDownTimeout = useRef<number>();

  useEffect(() => {
    if (countDownTimeout && countDownTimeout.current) {
      workerTimers.clearTimeout(countDownTimeout.current);
    }

    countDownTimeout.current = workerTimers.setTimeout(() => {
      nextCard();
    }, carouselTime);
  });

  const generatePosition = () => {
    const proportionSpaceVideo = 100 / numberVideos;
    const middle = Math.floor(numberVideos / 2);
    if (active === middle) {
      return '0%';
    }
    let multiplier = 1;
    if (active > middle) {
      multiplier = -1;
      const value = (active - middle) * proportionSpaceVideo * multiplier;
      return `${value}%`;
    }
    const value = (middle - active) * proportionSpaceVideo * multiplier;
    return `${value}%`;
  };

  return (
    <section className={classNames(className, styles.container)}>
      <ButtonSection title="Cursos" className={styles.title} />
      <div className={styles.videosCarousel} {...handlers}>
        <div
          className={styles.videos}
          style={
            { transform: `translateX(${generatePosition()}` } as CSSProperties
          }
        >
          {videos.map((item, index) => (
            <Video video={item} key={index} />
          ))}
        </div>
        <div className={styles.dots}>
          {videos.map((item, index) => {
            return (
              <span
                className={styles.dot}
                key={index}
                data-active={active == index ? true : false}
                data-ref={item}
                onClick={() => cardToggle(index)}
                aria-label={`To ${item.name} video`}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Videos };
