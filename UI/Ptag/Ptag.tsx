import cn from 'classnames';

import styles from './Ptag.module.css';
import { IPtag } from './Ptag.props';

export const Ptag = ({ children, size }: IPtag) => {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.large]: size === 'l',
      })}
    >
      {children}
    </p>
  );
};
