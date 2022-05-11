import React from 'react';
import Worldsvg from '../images/world.svg';

export default function World() {
  return (
    <section className="d-flex vh-100 align-items-center" style={{backgroundColor: '#354856'}}>
    <div className="d-flex justify-content-start vw-100 ms-5">
        <div className="info-container me-5">
            <h1 className="display-1 fw-bold mb-5 text-center">World</h1>
            <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Planet: </span>Pawluto</p>
            <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Species: </span>Anthropods</p>
            <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Economy: </span>Crumbling</p>
        </div>
        <div className="scroll-image ms-5 ps-5">
            <img src={Worldsvg} alt="" width="500px" />
        </div>
    </div>
  </section>
  )
}
