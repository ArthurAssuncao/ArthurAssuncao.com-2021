import classNames from 'classnames';
import nextId from 'react-id-generator';
import styles from './ResultsChart.module.scss';

interface ResultsChartProps {
  className?: string;
  students: number;
  youtubeLessons: number;
  youtubeCourses: number;
  yearsTeaching: number;
  yearsDeveloping: number;
  projects: number;
}

interface Results {
  [key: string]: {
    x: number;
    y: number;
    text: string;
    value: number;
  };
}

const ResultsChart = (props: ResultsChartProps): JSX.Element => {
  const {
    className,
    students,
    yearsDeveloping,
    yearsTeaching,
    projects,
    youtubeCourses,
    youtubeLessons,
  } = props;

  const firstLinePositionX = 20;
  const secondLinePositionX = 100;

  const data: Results = {
    projects: {
      x: 20,
      y: firstLinePositionX,
      text: 'Amazing projects',
      value: projects,
    },
    yearsDeveloping: {
      x: 170,
      y: firstLinePositionX,
      text: 'Years of development',
      value: yearsDeveloping,
    },
    youtubeCourses: {
      x: 300,
      y: firstLinePositionX,
      text: 'Courses on YouTube',
      value: youtubeCourses,
    },
    students: {
      x: 20,
      y: secondLinePositionX,
      text: 'Impacted students',
      value: students,
    },
    yearsTeaching: {
      x: 170,
      y: secondLinePositionX,
      text: 'Years teaching',
      value: yearsTeaching,
    },
    youtubeLessons: {
      x: 300,
      y: secondLinePositionX,
      text: 'Lessons on YouTube',
      value: youtubeLessons,
    },
  };

  return (
    <div className={classNames(className, styles.container)}>
      <svg
        viewBox="0 0 414 178"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.chart}
      >
        <path
          d="M59.6601 95.8938L59.3397 95.8189L59.1442 96.0836L-0.402188 176.703L-0.990906 177.5H0H414H414.5V177V1V0.5H414H396.199H396.088L395.988 0.546263L327.311 32.3398L327.196 32.3934L327.12 32.4958L286.825 86.8591L163.227 120.089L59.6601 95.8938Z"
          fill="#0F0F0F"
          stroke="#FF5F1F"
        />
        <g className={styles.texts}>
          {Object.keys(data).map((key) => {
            return (
              <foreignObject
                width="100"
                height="70"
                x={data[key].x}
                y={data[key].y}
                key={nextId()}
              >
                <div className={styles.textWrapper}>
                  <span
                    className={styles.textValue}
                  >{`+${data[key].value}`}</span>
                  <span className={styles.text}>{`${data[key].text}`}</span>
                </div>
              </foreignObject>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export { ResultsChart };
