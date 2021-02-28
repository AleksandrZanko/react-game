import React from 'react';

class Paper extends React.Component {
  render() {
    return(
      <button className="game-player--paper" onClick={this.props.click}></button>
    )
  }
}

export default Paper;