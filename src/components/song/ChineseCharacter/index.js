import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class ChineseCharacter extends Component {
  render() {
    return (
      <div className="chineseCharacter">
        <Typography variant="caption">
          {this.props.pinyin}
        </Typography>
        <Typography variant="h5" component="h3">
          {this.props.text}
        </Typography>
      </div>
    );
  }
}

export default ChineseCharacter;