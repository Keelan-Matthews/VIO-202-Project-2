import React from 'react';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

export default function CharacterCard(props) {
	return (
		<div className="d-flex justify-content-center align-items-center info-container-character">
			<GlitchClip duration={7000}>
				<img src={props.image} alt="" width="800px" />
			</GlitchClip>

			<div className="w-50">
				<h2 className="display-4 fw-bold">{props.character}</h2>
				<p className="h3 fw-normal mb-4"><span className="h2 fw-bold">Business: </span>{props.business}</p>
				<p className="h3 fw-normal mb-4"><span className="h2 fw-bold">Occupation: </span>{props.occupation}</p>
				<p className="h3 fw-normal mb-4"><span className="h2 fw-bold">Fun Fact: </span>{props.fact}</p>
			</div>
		</div>
	)
}
