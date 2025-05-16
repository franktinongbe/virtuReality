// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">VirtuReality</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/accueil">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/tunnels">Tunnels de Réalité</Nav.Link>
            <Nav.Link as={Link} to="/exploration">Exploration</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Profil" id="user-dropdown">
              <NavDropdown.Item as={Link} to="/profil">Mon Compte</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/parametres">Paramètres</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
