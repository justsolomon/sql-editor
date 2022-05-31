import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from 'components/global/Loader';
import 'styles/main.scss';

const Editor = lazy(() => import('./Editor'));
const Layout = lazy(() => import('components/global/Layout'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Editor />
        <Toaster />
      </Layout>
    </Suspense>
  );
};

export default App;
