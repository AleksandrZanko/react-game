import React from 'react';

class Popup extends React.Component {

  render() {
    return (
      <>
        <div className="popup">
          <span>Игра начинается!</span>
		      <label htmlFor="name">Введите ваше имя</label>
		      <input type="text" className="name" id="name" />
		      <button className="popup-button" onClick={this.props.closePopup}>Готово</button>
	      </div>
	      <div className="popup-overlay"></div>
      </>
    )
  }
}

export default Popup;