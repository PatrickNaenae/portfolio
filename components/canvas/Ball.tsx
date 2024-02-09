"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "@/app/Loading";


interface BallIconProps {
	imgUrl: string;
}

const Ball = ({ imgUrl }: BallIconProps) => {
	const [decal] = useTexture([imgUrl]);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={0.7}
					map={decal}
				/>
			</mesh>
		</Float>
	);
};

interface BallCanvasProps {
	icon: string;
}

const BallCanvas = ({ icon }: BallCanvasProps) => {
	return (
		<Canvas
			frameloop='demand'
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Ball imgUrl={icon} />
				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default BallCanvas;
