import classNames from 'classnames';
import styles from './Dot.module.scss';

interface DotProps {
  className?: string;
  index: number;
  active: boolean;
  onClick: () => void;
}

const Dot = (props: DotProps): JSX.Element => {
  const { className, index, onClick, active } = props;

  return (
    <button
      className={classNames(className, styles.container)}
      key={index}
      data-active={active}
      onClick={() => onClick()}
      aria-label={`To ${index} video`}
    ></button>
  );
};

export { Dot };
