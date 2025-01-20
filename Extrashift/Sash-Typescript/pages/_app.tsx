import '@/styles/globals.scss';
import Contentlayout from '../shared/layout-components/layout/content-layout';
import Landingpagelayout from '../shared/layout-components/layout/landingpage-layout';
import Authenticationlayout from '../shared/layout-components/layout/authentication-layout';
import ErrorPagesLayout from '@/shared/layout-components/layout/errorpages-layout';

const layouts: any = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Authenticationlayout: Authenticationlayout,
  ErrorPagesLayout: ErrorPagesLayout,
};
export default function App({ Component, pageProps }: any) {
  const Layout: any = layouts[Component.layout] || ((pageProps: any) => <Component>{pageProps}</Component>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
