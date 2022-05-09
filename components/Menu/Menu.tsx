import { AppContext } from 'context/app.context';
import { useContext } from 'react';

import { MenuItems } from './components/MenuItems';
import { firstLevelMenu } from './constants';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <div>
      <MenuItems
        setMenu={setMenu}
        menu={menu}
        firstLevelMenu={firstLevelMenu}
        firstCategory={firstCategory}
      />
    </div>
  );
};
