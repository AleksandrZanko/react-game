import React from 'react';

let body = document.querySelector('body');

class ChoiceBg extends React.Component {
  render() {
    return (
      <>
        <div className="choice-bg-wrapper">
          <h3 className="music-range-title">Выбор цветовой схемы</h3>
          { body.classList.contains('leaves') ? 
             <select className="select-bg" onChange={this.props.changeBg}>
              <option value="leaves">Листики</option>
              <option value="snows">Снежная</option>             
              <option value="trees">Деревья</option>
            </select> : body.classList.contains('trees') ? 
            <select className="select-bg" onChange={this.props.changeBg}>
              <option value="trees">Деревья</option>
              <option value="snows">Снежная</option>
              <option value="leaves">Листики</option>            
            </select> : 
            <select className="select-bg" onChange={this.props.changeBg}>
              <option value="snows">Снежная</option>
              <option value="leaves">Листики</option>
              <option value="trees">Деревья</option>
            </select>    
          }    
        </div>
      </>
    )
  }
}

export default ChoiceBg;