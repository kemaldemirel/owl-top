import { useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../UI';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3)

  return (
    <div>
      <Htag variant="h1">Hello</Htag>
      <Button variant="primary" arrow="rigth">
        Узнать по подробнее
      </Button>
      <Button variant="ghost" arrow="down">
        Ghost
      </Button>
      <Ptag size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam laboriosam
        officiis temporibus quos illum a labore veritatis aperiam similique repudiandae ad
        praesentium rem cum ex inventore eaque explicabo adipisci.
      </Ptag>
      <Ptag size="m">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam laboriosam
        officiis temporibus quos illum a labore veritatis aperiam similique repudiandae ad
        praesentium rem cum ex inventore eaque explicabo adipisci.
      </Ptag>
      <Ptag size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam laboriosam
        officiis temporibus quos illum a labore veritatis aperiam similique repudiandae ad
        praesentium rem cum ex inventore eaque explicabo adipisci.
      </Ptag>
      <Tag>Gray</Tag>
      <Tag size="l" color="red">
        Red
      </Tag>
      <Tag size="l" color="green">
        Green
      </Tag>
      <Tag size="l" color="grey">
        Gray
      </Tag>
      <Tag size="l" color="red" href="https://google.com">
        Tag link
      </Tag>
      <Tag size="s" color="green" href="https://google.com">
        default
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
