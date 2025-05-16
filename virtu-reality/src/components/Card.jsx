import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCard = ({ title, image, description, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow rounded-4 border-0 h-100">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a
            href={link}
            className="btn text-white mt-2"
            style={{
              background: 'linear-gradient(to right, #f2994a, #2d9cdb)',
              border: 'none',
            }}
          >
            Découvrir
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
