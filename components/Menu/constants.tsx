import { BooksIcon, CoursesIcon, ProductsIcon, ServicesIcon } from './icons';
import { TopLevelCategory } from '../../types/page.interface';
import { FirstLevelCategory } from '../../types/menu.interfaces';

export const firstLevelCategory: FirstLevelCategory[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];
