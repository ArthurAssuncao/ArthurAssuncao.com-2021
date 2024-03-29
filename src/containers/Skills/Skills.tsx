import classNames from 'classnames';
import { ButtonSection } from '../../components/ButtonSection';
import { Carousel } from '../../components/Carousel';
import { DescriptionSection } from '../../components/DescriptionSection';
import { SkillsCard } from '../../components/SkillsCard';
import styles from './Skills.module.scss';
import { mySkillsByConfortable, titleDescriptions } from './SkillsData';

interface SkillsProps {
  className?: string;
}

const Skills = (props: SkillsProps): JSX.Element => {
  const { className } = props;
  const numberCards = Object.keys(mySkillsByConfortable).length;
  const carouselTime = 5000;

  return (
    <section className={classNames(className, styles.container)}>
      <ButtonSection title="Skills" className={styles.title} />
      <div className={styles.content}>
        <DescriptionSection className={styles.description}>
          I know a lot of things and technologies, mainly from the JavaScript
          ecosystem
        </DescriptionSection>
        <Carousel
          numberItems={numberCards}
          time={carouselTime}
          className={styles.skillsGroup}
          classNameItemsContainer={styles.skillsCards}
          autoPlay={false}
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
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export { Skills };
