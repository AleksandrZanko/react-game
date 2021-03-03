import React from 'react';

class Points extends React.Component {
  render() {
    return(
      <div className="game-points">Очки: {this.props.points}</div>
    )
  }
}

export default Points;