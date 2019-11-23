import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);

ReactDOM.render(
  React.createElement('h2', null, 'Hello, React'),
  document.getElementById('root')
);
