import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../containers/Sidebar';
import Navbar from '../components/Navbar';
import Routes from '../routes';

const RootApp = ({
  store
}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div id="root">
        <Sidebar />
        <div id="content-panel">
          <Navbar />
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default RootApp;