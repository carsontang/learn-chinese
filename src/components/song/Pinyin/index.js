import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Pinyin extends Component {
  render() {
    return (
    <Typography align="left" variant="caption" component="h3">
      {this.props.text}
    </Typography>);
  }
}

export default Pinyin;