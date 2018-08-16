import React, { Component } from 'react';
import consumerWrapper from './consumerWrapper';

class ContextTest extends Component {
  render() {
    const { dispatch } = this.props.context;

    return (
      <div style={this.props.style}>
        {this.props.context.route}
        {this.props.hello}
      </div>
    );
  }
}

export default consumerWrapper(ContextTest);
