import React from 'react';
import CharacterCard from './CharacterCard';
import Gorilla from '../images/gorilla.svg';
import Fly from '../images/fly.svg';
import Giraffe from '../images/giraffe.svg';
import HorizontalScroll from 'react-scroll-horizontal';

export default function Characters() {

	const child = { width: `78em`, height: `100%` }
	const parent = { width: `1500px`, height: `68%` }

	return (
		<section className="d-flex flex-column vh-100 align-items-center" style={{ backgroundColor: '#354856' }}>
				<h1 className="display-1 fw-bold text-center text-white mb-5 pb-5">Characters</h1>
				<div style={parent} className="ms-5 ps-5">
					<HorizontalScroll reverseScroll={true}>
						<div style={child}>
							<CharacterCard
								character="Gojo Gorira"
								image={Gorilla}
								business="Anima Bank"
								occupation="Executive Manager"
								fact="Does not like to do any work himself" />
						</div>
						<div style={child}>
							<CharacterCard
								character="Tobias Tobu"
								image={Fly}
								business="Local Bar"
								occupation="Bartender/Crypto Enthusiast"
								fact="Is happy to make customers do the dishes" />
						</div>
						<div style={child}>
							<CharacterCard
								character="Katarina Kirin"
								image={Giraffe}
								business="Anima Bank"
								occupation="Chief Executive Officer"
								fact="her long neck leaves her succeptible to danger" />
						</div>
					</HorizontalScroll>
				</div>
				<div className="posiiton-relative">
					<div className='icon-scroll'></div>
				</div>
		</section>
	)
}
