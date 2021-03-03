import React from 'react';

class Button extends React.Component {
  render() {
    return(
      <button className="game-button" onClick={this.props.startGame}>Начать игру</button>
    )
  }
}

export default Button;