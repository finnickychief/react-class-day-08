import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider, Consumer } from './context';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector('#app')
);
