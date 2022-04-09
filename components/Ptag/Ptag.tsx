import { IPtag } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ children, size }: IPtag) => {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}>
      {children}
    </p>
  );
};
