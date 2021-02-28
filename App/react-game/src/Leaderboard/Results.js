import React from 'react';
import './leaderboard.css'

  let winKeys = [];
	const items = {...localStorage};
	const keys = Object.keys(items);
	for(const key of keys) {
		if(key.indexOf('winner') >= 0) {
			winKeys.push(JSON.parse(localStorage.getItem(key)));
		}
	}
  winKeys = winKeys.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  winKeys = winKeys.slice(0, 10);

class Results extends React.Component {

  render() {
    return (
      <><ol className="results-list">
         {winKeys.map(item => <li key={item.id} className="results-item">Игрок: {item.name}, очки: {item.points}, время: {item.time} cек., дата игры: {item.date.substr(0, 19)}. </li>)}
         </ol>
      </>
    )
  }
}

export default Results;