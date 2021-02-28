import React from 'react';
import MusicRange from './MusicRange';
import SoundRange from './SoundRange';
import ChoiceBg from './ChoiceBg';
import './settings.css';


class Settings extends React.Component {
  constructor() {
    super();

    this.changeBg = this.changeBg.bind(this);
  }


  changeBg(e) {
    let body = document.querySelector('body');
    if(body.classList.contains('leaves')) {
      body.classList.remove('leaves');
    } else if(body.classList.contains('trees')) {
      body.classList.remove('trees');
    } else {
      body.classList.remove('snows');
    }
    body.classList.add(e.target.value);
  }

  render() {
    return (
      <>
        <h1>Настройки</h1>
        <MusicRange changeMusicRange={this.props.changeMusicRange} musicVolume={this.props.musicVolume}/>
        <SoundRange changeSoundRange={this.props.changeSoundRange} soundVolume={this.props.soundVolume}/>
        <ChoiceBg changeBg={this.changeBg}/>
      </>
    )
  }
}

export default Settings;