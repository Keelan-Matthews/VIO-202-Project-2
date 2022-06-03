import React, { useState } from 'react';
import Portrait from '../images/portrait.svg';
import AuthorBackground from '../images/authorBackground.svg';
import Item from './Item';
import Pizza from '../images/pizza.svg';
import Sushi from '../images/sushi.svg';
import Noodles from '../images/ramen.svg';
import Coding from '../images/coding.svg';
import Music from '../images/music.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Author() {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	return (
		<section className="d-flex vh-100 align-items-center justify-content-center">
			<img src={AuthorBackground} alt="" className="position-absolute vh-100 author" />
			<div className="d-flex justify-content-between" style={{width: "1600px"}}>
				<div className="info-container-2 mt-5">
					<h1 className={hovered ? "display-1 fw-bold mb-5 glitch-effect" : "display-1 fw-bold mb-5"} data-text="The Author" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>The Author</h1>
					<p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Name: </span>Keelan Matthews</p>
					<p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Occupation: </span>Student</p>
					<p className="h1 fw-normal mb-5"><span className="display-5 fw-bold">Age: </span>19</p>
					<p className="h1 fw-bold mb-3">Favorite Foods</p>

					<div className="d-flex">
						<Item image={Pizza} title="Pizza" />
						<Item image={Sushi} title="Sushi" />
						<Item image={Noodles} title="Noodles" />
					</div>
					<p className="h1 fw-bold mb-3 mt-3">Hobbies</p>
					<div className="d-flex">
						<Item image={Music} title="Music" />
						<Item image={Coding} title="Coding" />
					</div>

				</div>
				<div className="d-flex flex-column align-items-center">
					<img src={Portrait} alt="" width="600px" className="ms-5 author" />
					<div className="d-flex socials">
						<a href="https://www.instagram.com/keelanriel" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faInstagram} className="icon display-5 me-3" />
						</a>
						<a href="https://github.com/Keelan-Matthews" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} className="icon display-5 me-3" />
						</a>
						<a href="https://open.spotify.com/artist/3JrDAXAf5v5QYQQxXHDf17?si=qfDUYZmrQaWfUmyHYxYjsQ" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faSpotify} className="icon display-5 me-3" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
