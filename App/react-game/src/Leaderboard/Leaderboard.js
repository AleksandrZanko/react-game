import React from 'react';
import Results from './Results';


  

class Leaderboard extends React.Component {

  render() {
    return (
      <>
        <h1 className="results-title">Результаты 10 предыдущих игр</h1>
        <Results/>
      </>
    )
  }
}

export default Leaderboard;