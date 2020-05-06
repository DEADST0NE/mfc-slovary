import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import store from './redux/store';
import App from './container/App';

ReactDOM.render(
  <Provider store={store}> 
      <App /> 
  </Provider>,
  document.getElementById('root')
);
