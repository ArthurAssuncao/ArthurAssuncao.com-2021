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
  time: number;
}

const Carousel = (props: CarouselProps): JSX.Element => {
  const { className, classNameItemsContainer, numberItems, time, children } =
    props;
  const [active, setActive] = useState(Math.floor(numberItems / 2));

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
    if (countDownTimeout && countDownTimeout.current) {
      workerTimers.clearTimeout(countDownTimeout.current);
    }

    countDownTimeout.current = workerTimers.setTimeout(() => {
      nextitem();
    }, time);
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
