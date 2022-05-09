import { AppContext } from 'context/app.context';
import { useContext } from 'react';

import styles from './Menu.module.css';
import { MenuItems } from './components/MenuItems';
import { firstLevelCategory } from './constants';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <div>
      <MenuItems menu={firstLevelCategory} />
    </div>
  );
};
