import classNames from 'classnames';
import { ButtonSection } from '../../components/ButtonSection';
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
      <ResultsChart
        students={200}
        projects={5}
        yearsDeveloping={6}
        yearsTeaching={7}
        youtubeCourses={5}
        youtubeLessons={40}
        className={styles.chart}
      />
    </section>
  );
};

export { MyResults };
