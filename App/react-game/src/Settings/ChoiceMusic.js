import React from 'react';



class ChoiceMusic extends React.Component {
  render() {
    return (
      <>
      <div className="music-choice-wrapper">
        <h3 className="music-choice-title">Выбор песни</h3>
          {this.props.currentSong === 'prayerC' ?
            <select className="music-choice" value="prayerC" onChange={this.props.changeSong}> 
              <option className="music-item" value="prayerC">Prayer in C</option> 
              <option className="music-item" value="spaceSound">Space</option>         
            </select> :
            <select className="music-choice" value="spaceSound" onChange={this.props.changeSong} > 
              <option className="music-item" value="spaceSound">Space</option>
              <option className="music-item" value="prayerC">Prayer in C</option> 
            </select>
          } 
      </div>
      </>
    )
  }
}

export default ChoiceMusic;