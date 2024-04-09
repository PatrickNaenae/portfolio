"use client";

import { useFrame} from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import {  useRef } from "react";
import { Group } from "three";
import Naenae from "@/models/naenae";
import Room from "@/models/room";



const Office: React.FC = (props) => {
	
	const characterContainerAboutRef = useRef<Group>(null);

	return (
		<>
			<motion.group
				position={[
					3.307364932712815, 0.14400000000000002, 4.081873375215418,
				]}
				rotation={[
					-3.141592653589793, -0.7853981633974481, -3.141592653589793,
				]}
				transition={{
					duration: 0.6,
				}}>
				<Naenae />
			</motion.group>
			<ambientLight intensity={2} />
			<motion.group
				position={[1.5, 2, 3]}
				scale={[1.5, 1.5, 1.5]}
				rotation-y={-Math.PI / 4}>
				<Room  />
				<group
					ref={characterContainerAboutRef}
					name='CharacterSpot'
					position={[0.07, 0.16, -0.57]}
					rotation={[-Math.PI, 0.42, -Math.PI]}></group>
			</motion.group>

			{/* SKILLS */}
			<motion.group
				position={[0, -1.5, -10]}>
				<directionalLight position={[-5, 3, 5]} intensity={0.4} />
			</motion.group>
		</>
	);
};

export default Office;
