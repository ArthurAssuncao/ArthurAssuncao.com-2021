import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './DescriptionSection.module.scss';

interface DescriptionSectionProps {
  className?: string;
  children: ReactNode;
}

const DescriptionSection = (props: DescriptionSectionProps): JSX.Element => {
  const { className, children } = props;

  return (
    <div className={classNames(className, styles.container)}>{children}</div>
  );
};

export { DescriptionSection };
