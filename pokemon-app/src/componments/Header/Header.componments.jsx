import React from 'react';
import { Link } from "react-router-dom";
import poke_logo from '../../asset/image/poke_logo.png';
import pokeball from '../../asset/image/pokeball.png';
import './Header.style.css';

const HeaderComponments = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to="/">
                {/* <img title='pokeball' src={pokeball} alt="pokeball"/> */}
                <img title='poke logo' src={poke_logo} alt="poke_logo"/>
                <span>Pokédex</span>
              </Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
            
        </nav>      
      </div>
    </div>
  )
}

export default HeaderComponments