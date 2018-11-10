import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (<div>{this.props.text}</div>);
  }
}

export default Button;