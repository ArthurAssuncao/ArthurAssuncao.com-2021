import classNames from 'classnames';
import { ButtonSection } from '../../components/ButtonSection';
import { DescriptionSection } from '../../components/DescriptionSection';
import { ResultsChart } from '../../components/ResultsChart';
import styles from './MyResults.module.scss';

interface MyResultsProps {
  className?: string;
}

const MyResults = (props: MyResultsProps): JSX.Element => {
  const { className } = props;

  return (
    <section className={classNames(className, styles.container)}>
      <ButtonSection title="My Results" className={styles.title} />
      <div className={styles.content}>
        <DescriptionSection className={styles.description}>
          Already developed projects, courses and I helped hundreds of students
        </DescriptionSection>
        <ResultsChart
          students={200}
          projects={5}
          yearsDeveloping={6}
          yearsTeaching={7}
          youtubeCourses={5}
          youtubeLessons={40}
          className={styles.chart}
        />
      </div>
    </section>
  );
};

export { MyResults };
