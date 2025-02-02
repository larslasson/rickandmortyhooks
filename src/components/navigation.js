import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className='container__Nav--link nav-link' to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='container__Nav--link nav-link' to='/about'>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='container__Nav--link nav-link' to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;