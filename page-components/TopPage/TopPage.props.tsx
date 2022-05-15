import { TopLevelCategory, TopPageModel } from 'types/page.interface';
import { ProductModel } from 'types/product.interface';

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
