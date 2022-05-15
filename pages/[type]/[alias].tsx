import axios from 'axios';
import { WhithLayout } from 'components/Layout/Layout';
import { firstLevelMenu } from 'components/Menu/constants';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { TopPageComponent } from 'page-components';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from 'types/menu.interfaces';
import { TopLevelCategory, TopPageModel } from 'types/page.interface';
import { ProductModel } from 'types/product.interface';

function TopPage({ page, products, firstCategory }: TopPageProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <span>Loading</span>;
  }

  return (
    <TopPageComponent
      page={page}
      products={products}
      firstCategory={firstCategory}
    />
  );
}

export default WhithLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: m.id,
      }
    );
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: firstCategoryItem.id,
      }
    );

    if (!menu.length) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
    );

    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
