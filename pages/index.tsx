import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag variant="h1">Hello</Htag>
      <Button variant="primary">Узнать по подробнее</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
