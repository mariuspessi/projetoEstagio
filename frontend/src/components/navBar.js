import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css'; // Para estilização da Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Meu Site</h1>
      </div>
      <ul className="navbar-links">
       
        <li>
          <Link to="/lagoa">Lagoa</Link>
          <Link to="/ete">Tratamento ETE</Link>
          <Link to="/eta">Tratamento ETA</Link>
          <Link to="/poco">Poço</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;

