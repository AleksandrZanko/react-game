import React from 'react';

class NewGameButton extends React.Component {

  render() {
    return (    
      <>
      <button className="new-game-btn" onClick={() => window.location.reload()}>Новая игра</button>
      </>
    )
  }
}

export default NewGameButton;