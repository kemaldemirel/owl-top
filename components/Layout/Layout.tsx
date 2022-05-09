import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { ILayoutProps } from 'components/Layout/Layout.props';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { AppContextProvider, IAppContext } from 'context/app.context';
import { FunctionComponent } from 'react';

import styles from './Layout.module.css';

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
