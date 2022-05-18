import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

export default function Stats() {
    const [checked, setChecked] = useState(false);

    function handleChange(e) {
      let isChecked = e.target.checked;
      setChecked(isChecked);
    }
    const stat1 = useRef(null);
    const stat2 = useRef(null);
    const stat3 = useRef(null);
    const stat4 = useRef(null);
    useEffect(()=>{
        if (checked) {
          stat1.current.classList.add('anim-1');
          stat2.current.classList.add('anim-2');
          stat3.current.classList.add('anim-3');
          stat4.current.classList.add('anim-4');
        }
        else {
          stat1.current.classList.remove('anim-1');
          stat2.current.classList.remove('anim-2');
          stat3.current.classList.remove('anim-3');
          stat4.current.classList.remove('anim-4');
        }
    })


  return (
    <section className="d-flex vh-100 align-items-center">
      <div className="d-flex justify-content-end vw-100 me-5">
          <div className="info-container me-5">
              <h1 className="display-1 fw-bold mb-2 text-center">Stats</h1>
              <div>
                  <input type="checkbox" className="checkbox" id="chk" onChange={e=>handleChange(e)} />
                  <label className="toggle" htmlFor="chk">
                      <FontAwesomeIcon icon={faDna} className="fa-dna" />
                      <FontAwesomeIcon icon={faDog} className="fa-dog" />
                      <div className="ball"></div>
                  </label>
              </div>
              <p className="display-5 fw-bold mb-4">Strength</p>
              <div className="stat-group" style={{width:"200px"}}>
                <div className="stat-line mb-4" ref={stat1}>
                    <FontAwesomeIcon icon={faHandFist} className="fa-stat" />
                </div>
                <div className="stat-line-back"></div>
              </div>

              <p className="display-5 fw-bold mb-4">Smarts</p>
              <div className="stat-group" style={{width:"500px"}}>
                <div className="stat-line mb-4" ref={stat2}>
                    <FontAwesomeIcon icon={faBrain} className="fa-stat" />
                </div>
                <div className="stat-line-back"></div>
              </div>

              <p className="display-5 fw-bold mb-4">Agility</p>
              <div className="stat-group" style={{width:"340px"}}>
                <div className="stat-line mb-4" ref={stat3}>
                    <FontAwesomeIcon icon={faPersonRunning} className="fa-stat" />
                </div>
                <div className="stat-line-back"></div>
              </div>

              <p className="display-5 fw-bold mb-4">Pushover</p>
              <div className="stat-group" style={{width:"800px"}}>
                <div className="stat-line mb-4" ref={stat4}>
                    <FontAwesomeIcon icon={faSnowflake} className="fa-stat" />
                </div>
                <div className="stat-line-back"></div>
              </div>
          </div>
      </div>
    </section>
  )
}
