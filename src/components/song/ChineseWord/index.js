import React, { Component } from 'react';
import ChineseCharacter from '../ChineseCharacter/';
import Tooltip from '@material-ui/core/Tooltip';

class ChineseWord extends Component {
  render() {
    const characters =
      <Tooltip disableFocusListener disableTouchListener title="Add">
        <ChineseCharacter
          text={this.props.characters.text}
          pinyin={this.props.characters.pinyin}/>
      </Tooltip>;
    
    const hover =
      <Tooltip disableFocusListener disableTouchListener title="I want to know">
        <div>我想</div>
      </Tooltip>;

    return (
      <div>{characters}{hover}</div>
    );
  }
}

export default ChineseWord;