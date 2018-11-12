import React, { Component } from 'react';
import ChineseCharacter from '../ChineseCharacter/';
import Tooltip from '@material-ui/core/Tooltip';

class ChineseWord extends Component {
  render() {
    const characterArray = this.props.characters.split('');
    const pinyinArray = this.props.pinyin.split(' ');

    if (characterArray.length !== pinyinArray.length) {
      throw new Error("Number of characters don't match the number of Pinyin words!");
    }

    const characters = characterArray.map((character, index) => (
      <ChineseCharacter text={character} pinyin={pinyinArray[index]}/>
    ));
    
    return (
      <div className="chineseWord" onClick={this.props.onClick}>{characters}</div>
    );
  }
}

export default ChineseWord;