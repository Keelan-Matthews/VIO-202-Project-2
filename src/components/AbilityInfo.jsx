import React, {useState} from 'react';
import Classified from '../images/classified.svg';

export default function Abilities() {
  const [clicked, setClicked] = useState(false);

  function updateClick() {
    setClicked(!clicked);
  }

  return (
    <section className="d-flex vh-100 align-items-center pe-5">
    <div className="d-flex justify-content-end vw-100 me-5">
        <div className="info-container">
          <h1 className="display-1 fw-bold mb-5">Abilities</h1>
          <p className="display-5 fw-bold mb-4">K-9 Instinct</p>
          <div>
              <div className={clicked ? "classified-container hide" : "classified-container"}>
                  <img src={Classified} alt="" className="classified-svg" onClick={updateClick} />
                  <p><span className="fw-bold">Warning:</span> This document is classified. It is only viewable by personnel with level 5 clearance (Alpha Bravo)</p>
              </div>
              
              <div className={clicked ? "document" : "document hide"}>
                <p>Upon thorough inspection of the cerebral cortex, the team found traces of <span className="redacted" style={{width: '200px'}}></span>. This pheremone release seemed to have trickled through a gap in Mr Holmes' nervous tissue after a psychotic episode whereby the <span className="redacted" style={{width: '50px'}}></span> made him <span className="redacted" style={{width: '100px'}}></span>. The result, code-named K9-Trace-19081 (AKA K-9 Impulse) genetically altered the way he perceives his surroundings. The subejct has heightened senses, as well as enhanced eyesight - as witnessed on the scene of <span className="redacted" style={{width: '100px'}}></span> <span className="redacted" style={{width: '200px'}}></span> when <span className="redacted" style={{width: '400px'}}></span></p>
                <small className="close-document" onClick={updateClick}>close</small>
              </div>
          </div>
        </div>
    </div>
  </section>
  )
}
