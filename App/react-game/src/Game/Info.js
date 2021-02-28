import React from 'react';
import Timer from './Timer';
import Lifes from './Lifes';
import Points from './Points';

class Info extends React.Component {
  
  render() {
    return (
      <div className="game-info">
        <Lifes lifes={this.props.lifes}/>
        <Timer time={this.props.time}/>
        <Points points={this.props.points}/>
      </div>
    )
  }
}

export default Info;