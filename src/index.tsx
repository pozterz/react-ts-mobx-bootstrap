import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { App } from './App';
import { Provider } from 'mobx-react';
import { stores, history } from './stores';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Provider {...stores}>
    <App history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
