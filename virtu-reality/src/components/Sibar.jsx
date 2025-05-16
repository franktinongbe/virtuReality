// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { House, Layers, Users, Settings } from 'react-bootstrap-icons';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" style={{ width: '250px' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 fw-bold">VirtuReality</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/accueil" className="nav-link text-white">
            <House className="me-2" /> Accueil
          </Link>
        </li>
        <li>
          <Link to="/tunnels" className="nav-link text-white">
            <Layers className="me-2" /> Tunnels de Réalité
          </Link>
        </li>
        <li>
          <Link to="/utilisateurs" className="nav-link text-white">
            <Users className="me-2" /> Utilisateurs
          </Link>
        </li>
        <li>
          <Link to="/parametres" className="nav-link text-white">
            <Settings className="me-2" /> Paramètres
          </Link>
        </li>
      </ul>
      <hr />
      <div className="text-white-50 small">© 2025 VirtuReality</div>
    </div>
  );
};

export default Sidebar;
