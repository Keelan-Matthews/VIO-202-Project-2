import React from 'react'

export default function BioInfo() {
  return (
    <section className="d-flex vh-100 align-items-center">
        <div className="d-flex justify-content-end vw-100 me-5">
            <div className="me-5 info-container">
                <h1 className="display-1 fw-bold mb-5 pb-2 text-center">Biography</h1>
                <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Name: </span>Bao James Holmes</p>
                <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Occupation: </span>Salaryman</p>
                <p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Age: </span>36</p>
                <div className="mt-5">
                    <div>
                    <h3 className="h1 fw-bold mb-4">Strengths</h3>
                    <div className="d-flex">
                        <div className="strength">
                        <p>Hard Worker</p>
                        </div>
                        <div className="strength">
                        <p>Can use a stapler</p>
                        </div>
                    </div>
                    </div>
                    <div>
                    <h3 className="h1 fw-bold mb-4">Weaknesses</h3>
                    <div className="d-flex">
                        <div className="strength">
                        <p>Terrible stamina</p>
                        </div>
                        <div className="strength">
                        <p>No Driver's License</p>
                        </div>
                        <div className="strength">
                        <p>Pushover</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}
