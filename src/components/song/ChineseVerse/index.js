import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ChineseCharacter from '../ChineseCharacter';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class ChineseVerse extends Component {

  render() {
    const characterArray = this.props.text.split('');
    const pinyinArray = this.props.pinyin.split(' ');

    if (characterArray.length !== pinyinArray.length) {
      throw new Error("Number of characters don't match the number of Pinyin words!");
    }

    const verse = characterArray.map((character, index) => (
      <ChineseCharacter text={character} pinyin={pinyinArray[index]}/>
    ));

    const translation =
      <Typography variant="subtitle1" component="h3">
        {this.props.english}
      </Typography>;

    return (
      <div>
        {verse}
        {this.props.showTranslation ? translation : null}
      </div>
    );
  }
}

export default withStyles(styles)(ChineseVerse);