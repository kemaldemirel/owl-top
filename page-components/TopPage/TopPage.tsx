import { Htag, Tag } from 'UI';

import styles from './TopPage.module.css';
import { TopPageComponentProps } from './TopPage.props';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag variant='h1'>{page.title}</Htag>
        <Tag color='grey' size='l'>
          {products.length}
        </Tag>
        <span>Сортировка</span>
      </div>
      {products.map((p) => (
        <div key={p._id}>{p.title}</div>
      ))}

      <div className={styles.hhTitle}>
        <Htag variant='h2'>Вакансии - Photoshop</Htag>
        <Tag color='red' size='l' href='https://hh.ru'>
          hh.ru
        </Tag>
      </div>

      <div className={styles.hhBlock}>HH Block</div>
    </div>
  );
};
