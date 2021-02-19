import { NavLink } from "react-router-dom";
import './header.css';

function Header() {
  return (
    <nav className='header-nav'>
      <ul className='header-list'>
        <li><NavLink className='header-link' to="/" exact>Игра</NavLink></li>
        <li><NavLink className='header-link' to="/rules">Правила</NavLink></li>
        <li><NavLink className='header-link' to="/settings">Настройки</NavLink></li>
        <li><NavLink className='header-link' to="/leaderboard">Доска почёта</NavLink></li>
      </ul>      
    </nav>
  )
}

export default Header;