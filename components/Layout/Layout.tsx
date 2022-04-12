import { ILayoutProps } from './Layout.props';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';
import { FunctionComponent } from 'react';

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export const WhithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function WhithLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
