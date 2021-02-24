import React, { memo } from 'react';

import { renderRoutes } from 'react-router-config';

import routes from './router';

import SHAppHeader from '@/components/app-header';
import SHAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SHAppHeader/>
        {renderRoutes(routes)}
        <SHAppFooter/>
      </HashRouter>
    </Provider>
    
  )
})

