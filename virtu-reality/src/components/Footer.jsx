// components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">VirtuReality</h5>
            <p className="small">
              Explorez des perspectives alternatives grâce à des tunnels de réalité immersifs.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Liens rapides</h6>
            <ul className="list-unstyled">
              <li><a href="/accueil" className="text-white text-decoration-none">Accueil</a></li>
              <li><a href="/tunnels" className="text-white text-decoration-none">Tunnels</a></li>
              <li><a href="/exploration" className="text-white text-decoration-none">Exploration</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Suivez-nous</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} VirtuReality. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
