import React from 'react';

class SoundRange extends React.Component {
  render() {
    return (
      <>
        <div className="sound-range-wrapper">
          <h3 className="sound-range-title">Громкость звуков</h3>
          <input id="soundVolume" type="range" min="0" max="1" step="0.1" onChange={this.props.changeSoundRange} value={this.props.soundVolume}></input>
        </div>
      </>
    )
  }
}

export default SoundRange;