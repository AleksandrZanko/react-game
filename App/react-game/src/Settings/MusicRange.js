import React from 'react';

class MusicRange extends React.Component {
  render() {
    return (
      <>
        <div className="music-range-wrapper">
          <h3 className="music-range-title">Громкость музыки</h3>
          <input id="musicVolume" type="range" min="0" max="1" step="0.1" onChange={this.props.changeMusicRange} value={this.props.musicVolume}></input>
        </div>
      </>
    )
  }
}

export default MusicRange;