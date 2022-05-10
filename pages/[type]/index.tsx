import axios from 'axios';
import { WhithLayout } from 'components/Layout/Layout';
import { firstLevelMenu } from 'components/Menu/constants';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from 'types/menu.interfaces';
import { TopLevelCategory } from 'types/page.interface';

function Type({ firstCategory, menu }: TypeProps): JSX.Element {
  return (
    <div>
      Type {firstCategory}
      <ul>
        {menu.map((m) => (
          <li>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default WhithLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
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

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory: firstCategoryItem.id,
    }
  );

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
