import React from 'react';

export default function Stats() {
  return (
    <section className="d-flex vh-100 align-items-center">
      <div className="d-flex justify-content-end vw-100 me-5">
          <div className="info-container me-5">
              <h1 className="display-1 fw-bold mb-2 text-center">Stats</h1>
              <p className="display-5 fw-bold mb-4">Strength</p>
              <div className="stat-group" style={{width:"200px"}}>
                <div className="stat-line mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
              <div className="stat-group" style={{width:"400px"}}>
                <div className="stat-line-2 mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
              <p className="display-5 fw-bold mb-4">Smarts</p>
              <div className="stat-group" style={{width:"500px"}}>
                <div className="stat-line mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
              <div className="stat-group" style={{width:"700px"}}>
                <div className="stat-line-2 mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
              <p className="display-5 fw-bold mb-4">Agility</p>
              <div className="stat-group" style={{width:"340px"}}>
                <div className="stat-line mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
              <div className="stat-group" style={{width:"890px"}}>
                <div className="stat-line-2 mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
              <p className="display-5 fw-bold mb-4">Pushover</p>
              <div className="stat-group" style={{width:"800px"}}>
                <div className="stat-line mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
              <div className="stat-group" style={{width:"10px"}}>
                <div className="stat-line-2 mb-4"></div>
                <div className="stat-line-back"></div>
              </div>
          </div>
      </div>
    </section>
  )
}
