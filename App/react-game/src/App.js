import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Game from './Game/Game.js';
import Rules from './Rules/Rules.js';
import Settings from './Settings/Settings.js';
import Leaderboard from './Leaderboard/Leaderboard.js';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Game}></Route>
          <Route path="/rules" component={Rules}></Route>
          <Route path="/settings" component={Settings}></Route>
          <Route path="/leaderboard" component={Leaderboard}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
