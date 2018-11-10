// @flow
"use strict";

import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
  render() {
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
        <ChineseVerse text="我想知道" pinyin="wǒ xiǎng zhī dào"/>
        <ChineseVerse text="流星能飞多久" pinyin="liú xīng néng fēi duō jiǔ"/>
        <ChineseVerse text="它的美丽是否" pinyin="tā de měi lì shì fǒu"/>
        <ChineseVerse text="值得去寻求" pinyin="zhí de qù xún qiú"/>
      </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
