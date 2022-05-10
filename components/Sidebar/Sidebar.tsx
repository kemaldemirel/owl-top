import cn from 'classnames';

import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import { ISidebar } from './Sidebar.props';
import Logo from './icons/logo.svg';

export const Sidebar = ({ className, ...props }: ISidebar) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>поиск</div>
      <Menu />
    </div>
  );
};
