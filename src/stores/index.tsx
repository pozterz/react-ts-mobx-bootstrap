import createBrowserHistory from 'history/createBrowserHistory';
import userStore from './users';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

const browserHistory = createBrowserHistory()
const routerStore = new RouterStore();

// window.__STORES__ = stores; // For Debug
  
export const history = syncHistoryWithStore(browserHistory, routerStore);
export const stores = {
  routing: routerStore,
  users: userStore
}
