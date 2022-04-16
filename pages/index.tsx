import { GetStaticProps } from 'next';
import { useState } from 'react';
import { WhithLayout } from '../components/Layout/Layout';
import { Htag, Button, Ptag, Tag, Rating } from '../UI';
import axios from 'axios';
import { MenuItem } from '../types/menu.interfaces';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <div>
      <Htag variant='h1'>Hello</Htag>
      <Button variant='primary' arrow='rigth'>
        Узнать по подробнее
      </Button>
      <Button variant='ghost' arrow='down'>
        Ghost
      </Button>
      <Ptag size='s'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        quibusdam laboriosam officiis temporibus quos illum a labore veritatis
        aperiam similique repudiandae ad praesentium rem cum ex inventore eaque
        explicabo adipisci.
      </Ptag>
      <Ptag size='m'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        quibusdam laboriosam officiis temporibus quos illum a labore veritatis
        aperiam similique repudiandae ad praesentium rem cum ex inventore eaque
        explicabo adipisci.
      </Ptag>
      <Ptag size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        quibusdam laboriosam officiis temporibus quos illum a labore veritatis
        aperiam similique repudiandae ad praesentium rem cum ex inventore eaque
        explicabo adipisci.
      </Ptag>
      <Tag>Gray</Tag>
      <Tag size='l' color='red'>
        Red
      </Tag>
      <Tag size='l' color='green'>
        Green
      </Tag>
      <Tag size='l' color='grey'>
        Gray
      </Tag>
      <Tag size='l' color='red' href='https://google.com'>
        Tag link
      </Tag>
      <Tag size='s' color='green' href='https://google.com'>
        default
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating} />

      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default WhithLayout(Home);

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
