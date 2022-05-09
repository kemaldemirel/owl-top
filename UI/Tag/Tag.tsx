import cn from 'classnames';

import styles from './Tag.module.css';
import { Itag } from './Tag.props';

export const Tag = ({ children, size = 's', color = 'ghost', href }: Itag) => {
  const varianTag = cn({
    [styles.tag]: true,
    [styles.small]: size === 's',
    [styles.large]: size === 'l',
    [styles.ghost]: color === 'ghost',
    [styles.grey]: color === 'grey',
    [styles.green]: color === 'green',
    [styles.red]: color === 'red',
  });

  return (
    <div className={varianTag}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
