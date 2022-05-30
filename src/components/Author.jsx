import React, {useState} from 'react';
import Portrait from '../images/portrait.jpg';
import AuthorBackground from '../images/authorBackground.svg';

export default function Author() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <section className="d-flex vh-100 align-items-center">
      <img src={ AuthorBackground } alt="" className="position-absolute vh-100 author" />
      <div className="d-flex justify-content-between container mb-5 pb-5">
          <div className="info-container-2">
              <h1 className={hovered ? "display-1 fw-bold mb-5 glitch-effect" : "display-1 fw-bold mb-5"} data-text="The Author" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>The Author</h1>
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
