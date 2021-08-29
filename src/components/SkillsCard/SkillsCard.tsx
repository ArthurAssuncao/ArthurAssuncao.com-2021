import classNames from 'classnames';
import nextId from 'react-id-generator';
import { SkillItem } from '../../containers/Skills/SkillsData';
import styles from './SkillsCard.module.scss';

interface SkillsCardProps {
  className?: string;
  skills: SkillItem[];
  title: string;
  description: string;
  onClick: () => void;
  'data-active': boolean;
}

const SkillsCard = (props: SkillsCardProps): JSX.Element => {
  const { className, skills, title, description, onClick } = props;
  const skillsNumber = skills.length;

  const groupOneInitial = 0;
  const groupOneFinal = skillsNumber / 3;
  const groupTwoInitial = groupOneFinal;
  const groupTwoFinal =
    skillsNumber > groupOneFinal * 2
      ? groupOneFinal * 2
      : (skillsNumber - groupOneFinal * 2) / 2;
  const groupThreeInitial = groupTwoFinal;
  const groupThreeFinal = skillsNumber;

  const skillsGroup1 = skills.slice(groupOneInitial, groupOneFinal);
  const skillsGroup2 = skills.slice(groupTwoInitial, groupTwoFinal);
  const skillsGroup3 = skills.slice(groupThreeInitial, groupThreeFinal);

  const Skill = (item: SkillItem): JSX.Element => {
    return (
      <div className={styles.item} key={nextId()} aria-label={item.technology}>
        {item.icon}
      </div>
    );
  };

  return (
    <div
      className={classNames(className, styles.container)}
      data-active={props['data-active']}
      onClick={onClick}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <div className={styles.list}>
        <div className={classNames(styles.skills, styles.skills1)}>
          {skillsGroup1.map((item) => Skill(item))}
        </div>
        <div className={classNames(styles.skills, styles.skills2)}>
          {skillsGroup2.map((item) => Skill(item))}
        </div>
        <div className={classNames(styles.skills, styles.skills3)}>
          {skillsGroup3.map((item) => Skill(item))}
        </div>
      </div>
    </div>
  );
};

export { SkillsCard };
