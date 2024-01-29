import React from 'react';
import { Link } from "react-router-dom";
import poke_logo from '../../asset/image/logo-pokemon.svg';
import '../Header/Header.style.css';

const HeaderComponments = () => {
  return (
    <header className="header">
        <div className="header-container">
            <Link to="/">
                <img title='poke logo' src={poke_logo} alt="poke_logo"/>
            </Link>
        </div>
    </header>
  )
}

export default HeaderComponments