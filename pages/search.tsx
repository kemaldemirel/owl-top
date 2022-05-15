import axios from 'axios';
import { WhithLayout } from 'components/Layout/Layout';
import { GetStaticProps } from 'next';
import { MenuItem } from 'types/menu.interfaces';

function Search(): JSX.Element {
  return <div>Search</div>;
}

export default WhithLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
