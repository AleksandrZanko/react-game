import React from 'react';

class SoundButton extends React.Component {
  render() {
    return (
      <>
        {this.props.soundOn === true ? 
        <button className="sound-button" onClick={this.props.soundOff}>Звуки</button> :
        <button className="sound-button music-button--off" onClick={this.props.soundOff}>Звуки</button>
        }      
      </>
    )
  }
}

export default SoundButton;