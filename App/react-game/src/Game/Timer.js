import React from 'react';

class Timer extends React.Component {
  render() {
    return(
      <div className="game-time">Время игры: {this.props.time} сек.</div>
    )
  }
}

export default Timer;