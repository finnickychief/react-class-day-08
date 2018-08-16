import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider, Consumer } from './context';

ReactDOM.render(
  <Provider>
    <Consumer>
      {store => {
        const { dispatch, route, contacts } = store;
        return <App dispatch={dispatch} route={route} contacts={contacts} />;
      }}
    </Consumer>
  </Provider>,
  document.querySelector('#app')
);
