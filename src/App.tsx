import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Login } from './views/Auth/Login';
import { Root } from './containers/Root';
import { Route, Router, Switch } from 'react-router';
import { Home } from './views/Home/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export const App = hot(module)(({ history }: any) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  </Root>
));