import React from 'react';

class EndGame extends React.Component {

  render() {
    return (
      <>
        <div className="end-game">
          <h2 className="end-game-title">Конец игры</h2>
          <p className="end-game-text">Игра закончилась, вы потратили все жизни.</p>
          <p className="end-game-text">Все результаты сохраняются и последние 10 отображаются во вкладке "Результаты".</p>
          <button className="end-game-button" onClick={this.props.endGame}>Принять поражение</button>
	      </div>
      </>
    )
  }
}

export default EndGame;