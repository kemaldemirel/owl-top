import { FirstLevelCategory } from '../../../types/menu.interfaces';

interface MenuItemsProps {
  menu: FirstLevelCategory[];
}

export const MenuItems = ({ menu }: MenuItemsProps): JSX.Element => {
  return (
    <>
      {menu.map((m) => (
        <li key={m.id}>
          {m.name} {m.icon}
        </li>
      ))}
    </>
  );
};
