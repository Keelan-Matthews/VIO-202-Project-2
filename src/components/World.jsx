import React, { Suspense } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Canvas } from "@react-three/fiber";
import WorldObj from "./WorldObj";
import { OrbitControls } from '@react-three/drei';
import Location from '../images/location.svg';

export default function World() {
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	
	return (
		<section className="d-flex vh-100 align-items-center mt-5 position-relative" style={{ backgroundColor: '#172026' }}>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 120,
					fullScreen: { enable: false },
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: true,
							speed: 0.2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
			<div className="d-flex justify-content-start vw-100 ms-5">
				<div className="info-container me-5">
					<h1 className="display-1 fw-bold mb-5 text-center">World</h1>
					<p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Planet: </span>Pawluto</p>
					<p className="h1 fw-normal mb-4"><span className="display-5 fw-bold">Species: </span>Anthropods</p>
					<p className="h1 fw-normal mb-4 pb-5"><span className="display-5 fw-bold">Economy: </span>Crumbling</p>
					<p className="h3 fw-normal mt-4">Can you find Anima Bank on the globe?</p>
					<div>
						<img src={Location} alt="" width="100px" />
					</div>
				</div>

				<Canvas className="canvas">
					<OrbitControls enableZoom={false} />
					<ambientLight intensity={0.3} />
					<directionalLight position={[2, 5, -2]} intensity={0.3} />
					<Suspense fallback={null}>
						<WorldObj/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	)
}
