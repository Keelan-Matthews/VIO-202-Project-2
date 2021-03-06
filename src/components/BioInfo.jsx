import React, {useState} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';

export default function BioInfo() {
    const [{isDragging}, drag] = useDrag(()=> ({
        type: "weakness",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const [{isOver}, drop] = useDrop(()=> ({
        accept: "weakness",
        drop: () => dropItem(),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const [dropped, setDropped] = useState(false);
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const dropItem = () => {
        const weakness = document.querySelector(".drop-container");

        weakness.innerHTML = 
        `<div class="strength change-color">
            <p>Pushover</p>
        </div>`;

        setDropped(true);
    }

  return (
    <section className="d-flex vh-100 align-items-center">
        <div className="d-flex justify-content-end vw-100 me-5">
            <div className="me-5 info-container">
                <h1 className={hovered ? "display-1 fw-bold mb-5 pb-2 text-center glitch-effect" : "display-1 fw-bold mb-5 pb-2 text-center"} data-text="Biography" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Biography</h1>
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
                            <div className={ dropped ? "" : "drop-container"} ref={drop} style={{ backgroundColor: isOver ? "#9ed4d2" : ""}}>
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
                            <GlitchSquiggly onHover={true}>
                                <div className={dropped ? "hide" : "strength pulse"} ref={ drag } style={{ display: isDragging ? "none" : ""}}>
                                    <GlitchText onHover={true} component='p'>
                                        Pushover
                                    </GlitchText>
                                </div>
                            </GlitchSquiggly> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}
