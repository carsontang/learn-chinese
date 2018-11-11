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
import Pinyin from './components/song/Pinyin';

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
        <ChineseVerse
          text="我想知道"
          pinyin="wǒ xiǎng zhī dào"
          english="I want to know"
          showTranslation={visible}/>
        <ChineseVerse
          text="流星能飞多久"
          pinyin="liú xīng néng fēi duō jiǔ"
          english="How long can a shooting star fly for?"
          showTranslation={visible}/>
        <ChineseVerse
          text="它的美丽是否"
          pinyin="tā de měi lì shì fǒu"
          english="Is its beauty"
          showTranslation={visible}/>
        <ChineseVerse
          text="值得去寻求"
          pinyin="zhí de qù xún qiú"
          english="Worth searching for?"
          showTranslation={visible}/>
      </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
