import React from 'react';

class Lifes extends React.Component {
  render() {
    return(
      <div className="game-lives">Жизни: {this.props.lifes}</div>
    )
  }
}

export default Lifes;