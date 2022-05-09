import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FirstLevelCategory, PageItem } from 'types/menu.interfaces';
import { MenuItem } from 'types/menu.interfaces';
import { TopLevelCategory } from 'types/page.interface';

import styles from './MenuItems.module.css';

interface MenuItemsProps {
  menu: MenuItem[];
  firstLevelMenu: FirstLevelCategory[];
  firstCategory: TopLevelCategory;
  setMenu: ((newMenu: MenuItem[]) => void) | undefined;
}

export const MenuItems = ({
  menu,
  firstLevelMenu,
  firstCategory,
  setMenu,
}: MenuItemsProps): JSX.Element => {
  const router = useRouter();

  const openSecondCategory = (secondCategory: string) => {
    setMenu?.(
      menu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpened = !m.isOpened;
        }
        return m;
      })
    );
  };

  const buildFirstLevel = () => {
    return firstLevelMenu.map((menu) => (
      <div key={menu.route}>
        <Link href={`/${menu.route}`}>
          <a>
            <div
              className={cn(styles.firstlevel, {
                [styles.firstLevelActive]: menu.id === firstCategory,
              })}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          </a>
        </Link>

        {menu.id === firstCategory && buildSecondLevel(menu)}
      </div>
    ));
  };

  const buildSecondLevel = (menuItem: FirstLevelCategory) => {
    return (
      <div>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory} className={styles.secondBlock}>
              <div
                className={styles.secondlevel}
                onClick={() => openSecondCategory(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
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
    return (
      <ul>
        {pages.map((p) => (
          <li key={p._id}>
            <Link href={`/${route}/${p.alias}`}>
              <a
                className={cn(styles.thridlevel, {
                  [styles.thridlevelActive]:
                    `/${route}/${p.alias}` === router.asPath,
                })}
              >
                {p.category}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return <>{buildFirstLevel()}</>;
};
