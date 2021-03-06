import { ReactComponentElement, ReactElement, ReactNode } from 'react';

import { TopLevelCategory } from './page.interface';

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
  isOpened?: boolean;
}

export interface FirstLevelCategory {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}
