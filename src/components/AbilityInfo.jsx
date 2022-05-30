import React, { useState } from 'react';
import Classified from '../images/classified.svg';
import Evidence from '../images/evidence.svg';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import GlitchText from 'react-glitch-effect/core/GlitchText';

export default function Abilities() {
	const [clicked, setClicked] = useState(false);
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	function updateClick() {
		setClicked(!clicked);
	}

	return (
		<section className="d-flex vh-100 align-items-center pe-5">
			<div className="d-flex justify-content-end vw-100 me-5">
				<div className="info-container">
					<h1 className={hovered ? "display-1 fw-bold mb-5 glitch-effect" : "display-1 fw-bold mb-5"} data-text="Abilities" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Abilities</h1>
					<p className="display-5 fw-bold mb-4">K-9 Instinct</p>
					<div>
						<div className={clicked ? "classified-container hide" : "classified-container"}>
							<img src={Classified} alt="" className="classified-svg" onClick={updateClick} />
							<GlitchText onHover={true} component='p'>
							<span className="fw-bold">Warning:</span> This document is classified. It is only viewable by personnel with level 5 clearance (Alpha Bravo)
							</GlitchText>
							</div>

						<div className={clicked ? "evidence-animation" : "hide"}>
								<img src={Evidence} alt="" className="evidence-svg" onClick={updateClick} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
