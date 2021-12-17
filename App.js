import React from 'react';
import Navigator from './src/Navigation/navigator';
import {store} from './src/Redux/store';
import {Provider} from 'react-redux';

const App = () => (
  <>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </>
);

export default App;
