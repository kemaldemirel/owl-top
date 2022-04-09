import { Itag } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ children, size = 's', color = 'ghost', href }: Itag) => {
  const varianTag = cn({
    [styles.tag]: true,
    [styles.s]: size === 's',
    [styles.l]: size === 'l',
    [styles.ghost]: color === 'ghost',
    [styles.grey]: color === 'grey',
    [styles.green]: color === 'green',
    [styles.red]: color === 'red',
  });

  return <div className={varianTag}>{href ? <a href={href}>{children}</a> : <>{children}</>}</div>;
};
