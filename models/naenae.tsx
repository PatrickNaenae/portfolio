"use client";

import React, { useRef, useEffect } from "react";
import { Group} from "three";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkinnedMesh } from "three";

const Naenae: React.FC = (props) => {
	const group = useRef<Group>(null);
	const { nodes, materials } = useGLTF("assets/naenae.glb");

	const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
	typingAnimation[0].name = "Typing";

	const { actions } = useAnimations(typingAnimation, group);

	useEffect(() => {
		if (actions && actions["Typing"]) {
			actions["Typing"].reset().play();
		}
	}, []);

	return (
		<group {...props} ref={group} dispose={null}>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				frustumCulled={false}
				name='EyeLeft'
				geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
				material={materials.Wolf3D_Eye}
				skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
				morphTargetDictionary={
					(nodes.EyeLeft as SkinnedMesh).morphTargetDictionary
				}
				morphTargetInfluences={
					(nodes.EyeLeft as SkinnedMesh).morphTargetInfluences
				}
			/>
			<skinnedMesh
				frustumCulled={false}
				name='EyeRight'
				geometry={(nodes.EyeRight as SkinnedMesh).geometry}
				material={materials.Wolf3D_Eye}
				skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
				morphTargetDictionary={
					(nodes.EyeRight as SkinnedMesh).morphTargetDictionary
				}
				morphTargetInfluences={
					(nodes.EyeRight as SkinnedMesh).morphTargetInfluences
				}
			/>
			<skinnedMesh
				frustumCulled={false}
				name='Wolf3D_Head'
				geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
				material={materials.Wolf3D_Skin}
				skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
				morphTargetDictionary={
					(nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary
				}
				morphTargetInfluences={
					(nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences
				}
			/>
			<skinnedMesh
				frustumCulled={false}
				name='Wolf3D_Teeth'
				geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
				morphTargetDictionary={
					(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary
				}
				morphTargetInfluences={
					(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences
				}
			/>
			<skinnedMesh
				frustumCulled={false}
				geometry={(nodes.Wolf3D_Hair as SkinnedMesh).geometry}
				material={materials.Wolf3D_Hair}
				skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
			/>
			<skinnedMesh
				frustumCulled={false}
				name='Wolf3D_Beard'
				geometry={(nodes.Wolf3D_Beard as SkinnedMesh).geometry}
				material={materials.Wolf3D_Beard}
				skeleton={(nodes.Wolf3D_Beard as SkinnedMesh).skeleton}
				morphTargetDictionary={
					(nodes.Wolf3D_Beard as SkinnedMesh).morphTargetDictionary
				}
				morphTargetInfluences={
					(nodes.Wolf3D_Beard as SkinnedMesh).morphTargetInfluences
				}
			/>
			<skinnedMesh
				frustumCulled={false}
				geometry={(nodes.Wolf3D_Glasses as SkinnedMesh).geometry}
				material={materials.Wolf3D_Glasses}
				skeleton={(nodes.Wolf3D_Glasses as SkinnedMesh).skeleton}
			/>
			<skinnedMesh
				frustumCulled={false}
				geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
				material={materials.Wolf3D_Body}
				skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
			/>
			<skinnedMesh
				frustumCulled={false}
				geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
			/>
			<skinnedMesh
				frustumCulled={false}
				geometry={
					(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry
				}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={
					(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton
				}
			/>
			<skinnedMesh
				frustumCulled={false}
				geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
			/>
		</group>
	);
};

useGLTF.preload("assets/naenae.glb");
export default Naenae;
