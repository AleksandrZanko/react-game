import React from 'react';

class MusicButton extends React.Component {
  render() {
    return (
      <>
        {this.props.musicOn === true ? 
        <button className="music-button" onClick={this.props.musicOff}>Музыка</button> :
        <button className="music-button music-button--off" onClick={this.props.musicOff}>Музыка</button>
        }       
      </>
    )
  }
}

export default MusicButton;