// @flow
"use strict";

import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChineseVerse from './components/song/ChineseVerse/';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  state = {
    visible: false,
  }

  toggleTranslationVisibility = () => {
    if (this.state.visible === true) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  }

  render() {
    const { visible } = this.state;
    const { classes } = this.props;

    const VERSES = [
      {
        text: "我想知道",
        pinyin: "wǒ xiǎng zhī dào",
        english: "I want to know",
      },
      {
        text: "流星能飞多久",
        pinyin: "liú xīng néng fēi duō jiǔ",
        english: "How long can a shooting star fly for?",
      },
      {
        text: "它的美丽是否",
        pinyin: "tā de měi lì shì fǒu",
        english: "Is its beauty",
      },
      {
        text: "值得去寻求",
        pinyin: "zhí de qù xún qiú",
        english: "Worth searching for?",
      },
      {
        text: "夜空的花",
        pinyin: "yè kōng de huā",
        english: "The flowers of the night sky",
      },
      {
        text: "散落在你身后",
        pinyin: "sàn luò zài nǐ shēn hòu",
        english: "Scatter behind you",
      },
    ];

    const CHINESE_VERSES =
      VERSES.map(verse => {
        return <ChineseVerse
        text={verse.text}
        pinyin={verse.pinyin}
        english={verse.english}
        showTranslation={visible}/>
      });

    return (
      <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Learn Chinese
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.root} elevation={1}>
        <Button variant="outlined" onClick={this.toggleTranslationVisibility}>
         { visible ? "Hide English translation" : "Show English translation" }
        </Button>
        {CHINESE_VERSES}
      </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
