import { Catalog } from 'catalog';
import HelloPage from 'components/lib/HelloPage';
import React from 'react';
import SamplePage from './SamplePage';

const App = () => {
  return (
    <Catalog
      title="Catalog"
      pages={[
        {
          content: HelloPage,
          path: '/',
          title: 'Hello Page',
        },
        {
          content: SamplePage,
          path: '/sample',
          title: 'Sample Page',
        },
      ]}
    />
  );
};
export default App;
