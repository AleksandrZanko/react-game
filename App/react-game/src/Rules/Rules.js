import React from 'react';
import './rules.css';

class Rules extends React.Component {
  render() {
    return (
      <>
        <h1>Правила игры</h1>
        <p className="rules-text">В игре дествуют стандартные правила игры "Камень-ножницы-бумага".</p>
        <p className="rules-text"><b>Камень</b> побеждает ножницы и проигрывает бумаге.</p>
        <p className="rules-text"><b>Бумага</b> побеждает камень и проигрывает ножницам.</p>
        <p className="rules-text"><b>Ножницы</b> побеждают бумагу и проигрывают камню.</p>
        <p className="rules-text">За победу начисляется 1 очко. Игра длится до тех пор пока игрок не потратит все жизни.</p>
      </>
    )
  }
}

export default Rules;