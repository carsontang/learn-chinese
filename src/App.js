// @flow
"use strict";

import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChineseVerse from './components/song/ChineseVerse/';
import ChineseWord from './components/song/ChineseWord/';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  drawer: {
    width: "45%"
  },
});

class App extends Component {
  state = {
    isTranslationVisible: false,
    isDrawerVisible: false,
  }

  toggleTranslationVisibility = () => {
    if (this.state.isTranslationVisible === true) {
      this.setState({ isTranslationVisible: false });
    } else {
      this.setState({ isTranslationVisible: true });
    }
  }

  toggleDrawer = () => {
    if (this.state.isDrawerVisible === true) {
      this.setState({ isDrawerVisible: false });
    } else {
      this.setState({ isDrawerVisible: true });
    }
  }

  render() {
    const { isTranslationVisible } = this.state;
    const { classes, theme } = this.props;

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
          showTranslation={isTranslationVisible}/>
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
         { isTranslationVisible ? "Hide English translation" : "Show English translation" }
        </Button>
        {CHINESE_VERSES}
        <ChineseWord characters="夜空" pinyin="yè kōng" onClick={this.toggleDrawer} />
        <ChineseWord characters="的" pinyin="de" />
        <ChineseWord characters="花" pinyin="huā" />
      </Paper>
      <Drawer classes={{paper: classes.drawer }} anchor="right" open={this.state.isDrawerVisible} onClose={this.toggleDrawer}>
        <div
          role="button"
          onClick={this.toggleDrawer}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary" gutterBottom>
                夜空
              </Typography>
              <Typography variant="caption">
                night sky
              </Typography>
            </CardContent>
            <Divider />
            <List component="nav">
              <ListItem button>
                <Typography variant="caption">
                  Example Usage
                </Typography>
              </ListItem>
              <ListItem button>
                <ListItemText primary="探照灯掠过夜空。" />
                <Typography variant="caption">
                The searchlights swept the night sky.
                </Typography>
              </ListItem>
              <ListItem button>
                <ListItemText primary="夜空中群星闪动。" />
                <Typography variant="caption">
                  Stars twinkled in the night sky.
                </Typography>
              </ListItem>
            </List>
            <CardActions>
              <Button variant="outlined" color="primary" onClick={this.toggleDrawer}>Hide</Button>
            </CardActions>
          </Card>
        </div>
      </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true } )(App);
