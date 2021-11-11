import classNames from 'classnames';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import * as workerTimers from 'worker-timers';
import styles from './Carousel.module.scss';
import { Dot } from './Dot';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  classNameItemsContainer?: string;
  numberItems: number;
  time?: number;
  autoPlay: boolean;
}

const Carousel = (props: CarouselProps): JSX.Element => {
  const {
    className,
    classNameItemsContainer,
    numberItems,
    time,
    children,
    autoPlay,
  } = props;
  const defaultTime = 3000;
  const middle =
    numberItems % 2 == 0
      ? Math.floor(numberItems / 2) - 1
      : Math.floor(numberItems / 2);
  const [active, setActive] = useState(middle);

  const itemToggle = (index: number) => {
    if (index !== active && index < numberItems && index >= 0) {
      setActive(index);
    }
  };

  const nextitem = () => {
    if (active + 1 < numberItems) {
      itemToggle(active + 1);
      return;
    }
    itemToggle(0);
  };

  const previtem = () => {
    if (active - 1 > 0) {
      itemToggle(active - 1);
      return;
    }
    itemToggle(numberItems);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => previtem(),
    onSwipedRight: () => nextitem(),
  });

  const generatePosition = () => {
    const proportionSpaceVideo = 100 / numberItems;
    const middle = Math.floor(numberItems / 2);
    const isPar = numberItems % 2 == 0;
    const valueAdjust = isPar ? 100 / (numberItems * 2) : 0;

    if (active === middle) {
      return isPar ? `${-valueAdjust}%` : `${valueAdjust}%`;
    }
    let multiplier = 1;
    if (active > middle) {
      multiplier = -1;
      const value =
        ((active - middle) * proportionSpaceVideo + valueAdjust) * multiplier;
      return `${value}%`;
    }
    // active > middle
    const value =
      ((middle - active) * proportionSpaceVideo - valueAdjust) * multiplier;
    return `${value}%`;
  };

  const Dots = (): JSX.Element => {
    const dots = [];

    for (let index = 0; index < numberItems; index++) {
      dots.push(
        <Dot
          key={index}
          active={active == index ? true : false}
          index={index}
          onClick={() => itemToggle(index)}
        />
      );
    }

    return <div className={styles.dots}>{dots}</div>;
  };

  let countDownTimeout = useRef<number>();

  useEffect(() => {
    if (autoPlay) {
      if (countDownTimeout && countDownTimeout.current) {
        workerTimers.clearTimeout(countDownTimeout.current);
      }

      countDownTimeout.current = workerTimers.setTimeout(() => {
        nextitem();
      }, time || defaultTime);
    }
  });

  return (
    <div className={classNames(styles.container, className)} {...handlers}>
      <div
        className={classNames(styles.items, classNameItemsContainer)}
        style={
          { transform: `translateX(${generatePosition()}` } as CSSProperties
        }
      >
        {children}
      </div>
      <Dots />
    </div>
  );
};

export { Carousel };
