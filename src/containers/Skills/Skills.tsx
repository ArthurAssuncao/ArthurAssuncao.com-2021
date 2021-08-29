import classNames from 'classnames';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import nextId from 'react-id-generator';
import { useSwipeable } from 'react-swipeable';
import * as workerTimers from 'worker-timers';
import { ButtonSection } from '../../components/ButtonSection';
import { SkillsCard } from '../../components/SkillsCard';
import styles from './Skills.module.scss';
import { mySkillsByConfortable, titleDescriptions } from './SkillsData';

interface SkillsProps {
  className?: string;
}

const Skills = (props: SkillsProps): JSX.Element => {
  const { className } = props;
  const numberCards = Object.keys(mySkillsByConfortable).length;
  const [active, setActive] = useState(Math.floor(numberCards / 2));
  const carouselTime = 5000;

  const cardToggle = (index: number) => {
    if (index !== active) {
      setActive(index);
    }
  };

  const nextCard = () => {
    if (active + 1 < numberCards) {
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
    cardToggle(numberCards);
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

  return (
    <section className={classNames(className, styles.container)}>
      <ButtonSection title="Skills" className={styles.title} />
      <div className={styles.skillsGroup} {...handlers}>
        <div
          className={styles.skillsCards}
          data-active={active}
          style={{ '--number-cards': numberCards } as CSSProperties}
        >
          {Object.keys(mySkillsByConfortable).map((key, index) => {
            const skillList = mySkillsByConfortable[key];
            const skillTitle = key;
            const skillDescription = titleDescriptions[key];
            return (
              <SkillsCard
                skills={skillList}
                key={index}
                title={skillTitle}
                description={skillDescription}
                className={styles.skillsCard}
                onClick={() => cardToggle(index)}
                data-active={active == index ? true : false}
              />
            );
          })}
        </div>
        <div className={styles.skillsDots}>
          {Object.keys(mySkillsByConfortable).map((item, index) => {
            return (
              <button
                className={styles.skillsDot}
                key={nextId()}
                data-active={active == index ? true : false}
                data-ref={item}
                onClick={() => cardToggle(index)}
                aria-label={`To ${item} card`}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Skills };
