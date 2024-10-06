import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <nav>
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/add-trip">Add Trip</Link>
        </div>
  </nav>
};

export default NavBar;