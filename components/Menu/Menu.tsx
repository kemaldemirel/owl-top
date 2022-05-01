import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import { firstLevelCategory } from './constants';
import { MenuItems } from './components/MenuItems';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <div>
      <ul>
        <MenuItems menu={firstLevelCategory} />
      </ul>
    </div>
  );
};
