import React from 'react';
import { Provider } from 'react-redux';

import RateConvertContainer from './containers/RateConvert';

import { configureStore, } from './store';

const store = configureStore();

export default () => (
      <Provider store={store}>
        <RateConvertContainer />
      </Provider>
  );