import { ILayoutProps } from './Layout.props';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';
import { FunctionComponent } from 'react';
import styles from './Layout.module.css';
import { AppContextProvider, IAppContext } from '../../context/app.context';

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const WhithLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function WhithLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
