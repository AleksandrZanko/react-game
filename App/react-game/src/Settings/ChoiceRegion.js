import React from 'react';


class ChoiceRegion extends React.Component {

  
  render() {
    return (     
      <div className="choice-region-wrapper">
        <h3 className="change-region-title">Выбор региона</h3>
        {this.props.region === 'europa' ?
        <select className="region-select" value={this.props.region} onChange={this.props.changeRegion}>
          <option value="europa">Европа</option>
          <option value="africa">Африка</option>
        </select> :
        <select className="region-select" value={this.props.region} onChange={this.props.changeRegion}>
          <option value="africa">Африка</option>
          <option value="europa">Европа</option>
        </select>

        }
         
      </div> 
    )
  }
}

export default ChoiceRegion;