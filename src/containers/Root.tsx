import * as React from 'react';
import { isProd } from '../config/';

export class Root extends React.Component<any, any> {
  renderDevTool = () => {
    if (!isProd) {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />
    }
    return null
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
}