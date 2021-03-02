import React from 'react';

class PlayerChoice extends React.Component {
  
  render() {
    return (
      <div className="game-player-wrapper">
        <h2 className="game-player-title">Ваш выбор</h2>
        {this.props.region === 'europa' ?
        <div className="game-player">    
          <button className="game-player--rock" onClick={this.props.playerOption} id="rock"></button>
          <button className="game-player--scissors" onClick={this.props.playerOption} id="scissors"></button>
          <button className="game-player--paper" onClick={this.props.playerOption} id="paper"></button>
        </div> :
        <div className="game-player">    
          <button className="game-player--rock-africa" onClick={this.props.playerOption} id="rock"></button>
          <button className="game-player--scissors-africa" onClick={this.props.playerOption} id="scissors"></button>
          <button className="game-player--paper-africa" onClick={this.props.playerOption} id="paper"></button>
        </div>
        }
        
        <div className="overflow"></div>
      </div>
    )
  }
}

export default PlayerChoice;