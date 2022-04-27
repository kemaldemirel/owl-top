import { ISidebar } from './Sidebar.props';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: ISidebar) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
