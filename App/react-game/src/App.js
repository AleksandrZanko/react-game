import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Game from './Game/Game.js';
import Rules from './Rules/Rules.js';
import Settings from './Settings/Settings.js';
import Leaderboard from './Leaderboard/Leaderboard.js';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import gamesound from './audio/game.mp3';
import spaceSound from './audio/space.mp3';

class App extends React.Component {
  constructor() {
    super();

    this.changeMusicRange = this.changeMusicRange.bind(this);
    this.changeSoundRange = this.changeSoundRange.bind(this);
    this.changeMusicVolume = this.changeMusiVolume.bind(this);
    this.changeMusicOn = this.changeMusicOn.bind(this);
    this.changeSoundOn = this.changeSoundOn.bind(this);
    this.changeSong = this.changeSong.bind(this);
    this.changeRegion = this.changeRegion.bind(this);

    this.state = {
      musicVolume: 0.5,
      soundVolume: 0.5,
      bgsound: new Audio(gamesound),
      musicOn: false,
      soundOn: true,
      currentSong: 'prayerC',
      region: 'europa'
    }
  }

  changeMusicRange(e) {
    this.setState({musicVolume: e.target.value}, this.changeMusiVolume);  
  }

  changeMusiVolume() {
    this.state.bgsound.volume = this.state.musicVolume;
  }

  changeSoundRange(e) {
    this.setState({soundVolume: e.target.value});
  }

  changeMusicOn() {
    let musicButton = document.querySelector('.music-button');
    if(musicButton.classList.contains('music-button--off')) {
      this.setState({musicOn: true});
    } else {
      this.setState({musicOn: false});
    }  
  }

  changeSoundOn() {
    let soundButton = document.querySelector('.sound-button');
    if(soundButton.classList.contains('music-button--off')) {
      this.setState({soundOn: true});
    } else {
      this.setState({soundOn: false});
    } 
  }

  changeSong(e) {
    if(this.state.musicOn) {
      this.state.bgsound.pause();
      setTimeout(() => {this.state.bgsound.play()}, 100);
    }
    
    if(e.target.value === 'spaceSound') {
      this.setState({bgsound: new Audio(spaceSound), currentSong: e.target.value});
    } else {
      this.setState({bgsound: new Audio(gamesound), currentSong: e.target.value});
    }
  }

  changeRegion(e) {
    console.log(e.target.value);
    this.setState({region: e.target.value});
  }

  render () {
      return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={props => <Game region={this.state.region} changeSoundOn={this.changeSoundOn} changeMusicOn={this.changeMusicOn} soundOn={this.state.soundOn} musicOn={this.state.musicOn} bgsound={this.state.bgsound} musicVolume={this.state.musicVolume} soundVolume={this.state.soundVolume} {...props} />}></Route>
            <Route path="/rules" component={Rules}></Route>
            <Route path="/settings" render={props => <Settings region={this.state.region} changeRegion={this.changeRegion} currentSong={this.state.currentSong} changeSong={this.changeSong} musicVolume={this.state.musicVolume} changeMusicRange={this.changeMusicRange} soundVolume={this.state.soundVolume} changeSoundRange={this.changeSoundRange} {...props} />}></Route>
            <Route path="/leaderboard" component={Leaderboard}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
