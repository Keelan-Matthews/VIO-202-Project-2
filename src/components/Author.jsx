import React from 'react';
import Portrait from '../images/portrait.jpg';
import AuthorBackground from '../images/authorBackground.svg';

export default function Author() {
  return (
    <section className="d-flex vh-100 align-items-center">
      <img src={ AuthorBackground } alt="" className="position-absolute vh-100 author" />
      <div className="d-flex justify-content-between container mb-5 pb-5">
          <div className="info-container-2">
              <h1 className="display-1 fw-bold mb-5">The Author</h1>
              <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Name: </span>Keelan Matthews</p>
              <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Occupation: </span>Student</p>
              <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Age: </span>19</p>
          </div>
          <div className="author">
              <img src={Portrait} alt="" width="400px" />
          </div>
      </div>
    </section>
  )
}
