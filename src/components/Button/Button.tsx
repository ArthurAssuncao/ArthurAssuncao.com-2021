import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  animated?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { className, type, disabled, children, animated } = props;

  return (
    <div className={classNames(className, styles.container)}>
      <button
        type={type ? type : 'button'}
        disabled={disabled}
        className={styles.button}
        data-animated={animated ? animated : false}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
