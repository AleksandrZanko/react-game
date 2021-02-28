import React from 'react';

class ComputerChoice extends React.Component {
  
  render() {
    return (
      <div className="game-computer">
        <h2 className="game-computer-title">Выбор компьютера</h2>
        <div className="game-computer--answer"></div>
      </div>
    )
  }
}

export default ComputerChoice;