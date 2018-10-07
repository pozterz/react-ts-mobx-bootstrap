import * as React from 'react'
import {
  Route,
  Redirect
} from "react-router-dom"

import { observer, inject } from 'mobx-react'

@inject('users', 'routing')
@observer
export class PrivateRoute extends React.Component<any, any> {
  render() {

    const {
      users: { isLoggedIn },
      component: InnerComponent,
      ...rest
    } = this.props;

    const { location } = this.props;

    return (
      <Route
        {...rest}
        render={
          props => (
            isLoggedIn
              ? <InnerComponent {...props} />
              : <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    );
  }
}

export default PrivateRoute
