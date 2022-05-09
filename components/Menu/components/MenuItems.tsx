import cn from 'classnames';
import { FirstLevelCategory, PageItem } from 'types/menu.interfaces';
import { MenuItem } from 'types/menu.interfaces';
import { TopLevelCategory } from 'types/page.interface';

import styles from './MenuItems.module.css';

interface MenuItemsProps {
  menu: MenuItem[];
  firstLevelMenu: FirstLevelCategory[];
  firstCategory: TopLevelCategory;
}

export const MenuItems = ({
  menu,
  firstLevelMenu,
  firstCategory,
}: MenuItemsProps): JSX.Element => {
  const buildFirstLevel = () => {
    return firstLevelMenu.map((menu) => (
      <div key={menu.route}>
        <a href={menu.route}>
          <div
            className={cn(styles.firstlevel, {
              [styles.firstLevelActive]: menu.id === firstCategory,
            })}
          >
            {menu.icon}
            <span>{menu.name}</span>
          </div>
        </a>
        {menu.id === firstCategory && buildSecondLevel(menu)}
      </div>
    ));
  };

  const buildSecondLevel = (menuItem: FirstLevelCategory) => {
    return (
      <div>
        {menu.map((m) => {
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondlevel}>{m._id.secondCategory}</div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlock]: m.isOpened,
                })}
              >
                {buildThridlevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThridlevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a key={p._id} href={`${route}/${p.alias}`}>
        {p.category}
      </a>
    ));
  };

  return <>{buildFirstLevel()}</>;
};
