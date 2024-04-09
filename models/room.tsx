"use client";

import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Group, Mesh } from "three";




const Room: React.FC = (props) => {
	const roomRef = useRef<Group>(null);
	const { nodes, materials } = useGLTF("./assets/room.glb");
	// const textureVSCode = useVideoTexture("videos/capcut.mov");

	return (
		<group ref={roomRef} {...props} dispose={null}>
			{/* <mesh
				name='Screen'
				geometry={(nodes.Screen as Mesh).geometry}
				position={[0.45, 0.94, -1.72]}
				rotation={[Math.PI, -1.1, Math.PI]}>
				<meshBasicMaterial map={textureVSCode} toneMapped={false} />
			</mesh> */}
			<group rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group position={[2.507, -5.896, 4.115]} scale={2.468}>
						<mesh
							geometry={
								(nodes.polySurface1299_sofa1_0 as Mesh).geometry
							}
							material={materials.sofa1}
						/>
						<mesh
							geometry={
								(nodes.polySurface1299_walls_0 as Mesh).geometry
							}
							material={materials.walls}
						/>
						<mesh
							geometry={
								(nodes.polySurface1300_lambert9_0 as Mesh)
									.geometry
							}
							material={materials.lambert9}
						/>
						<mesh
							geometry={
								(nodes.polySurface1301_lambert9_0 as Mesh)
									.geometry
							}
							material={materials.lambert9}
						/>
					</group>
					<group position={[-0.074, -0.179, 0.357]} scale={1.063}>
						<mesh
							geometry={
								(nodes.polySurface1074_lambert2_0 as Mesh)
									.geometry
							}
							material={materials.lambert2}
						/>
						<mesh
							geometry={
								(nodes.polySurface1075_white2_0 as Mesh)
									.geometry
							}
							material={materials.white2}
						/>
						<mesh
							geometry={
								(nodes.polySurface1076_white2_0 as Mesh)
									.geometry
							}
							material={materials.white2}
						/>
					</group>
					<group position={[4.337, 1.71, -1.305]} scale={0.228}>
						<mesh
							geometry={
								(nodes.polySurface813_yellow_0 as Mesh).geometry
							}
							material={materials.yellow}
						/>
						<mesh
							geometry={
								(nodes.polySurface813_floor_0 as Mesh).geometry
							}
							material={materials.floor}
						/>
						<mesh
							geometry={
								(nodes.polySurface814_flower_0 as Mesh).geometry
							}
							material={materials.flower}
						/>
						<mesh
							geometry={
								(nodes.polySurface815_flower_0 as Mesh).geometry
							}
							material={materials.flower}
						/>
						<mesh
							geometry={
								(nodes.polySurface816_flower_0 as Mesh).geometry
							}
							material={materials.flower}
						/>
						<mesh
							geometry={
								(nodes.polySurface817_flower_0 as Mesh).geometry
							}
							material={materials.flower}
						/>
					</group>
					<mesh
						geometry={
							(nodes.polySurface143_lambert1_0 as Mesh).geometry
						}
						material={materials.lambert1}
					/>
					<mesh
						geometry={(nodes.pCube94_white_0 as Mesh).geometry}
						material={materials.white}
					/>
					<mesh
						geometry={(nodes.polySurface5_floor_0 as Mesh).geometry}
						material={materials.floor}
					/>
					<mesh
						geometry={(nodes.pCube96_lambert1_0 as Mesh).geometry}
						material={materials.lambert1}
					/>
					<mesh
						geometry={(nodes.pCube108_wood_0 as Mesh).geometry}
						material={materials.wood}
					/>
					<mesh
						geometry={(nodes.pCylinder49_metal_0 as Mesh).geometry}
						material={materials.metal}
					/>
					<mesh
						geometry={(nodes.pPlane1_blue_0 as Mesh).geometry}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface241_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={(nodes.pCylinder70_metal_0 as Mesh).geometry}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface251_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface584_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface585_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface586_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface587_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface588_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface589_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface590_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface591_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface592_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface593_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface593_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={(nodes.pCube174_lambert1_0 as Mesh).geometry}
						material={materials.lambert1}
					/>
					<mesh
						geometry={(nodes.pCube273_cloth2_0 as Mesh).geometry}
						material={materials.cloth2}
					/>
					<mesh
						geometry={(nodes.pCube274_lambert1_0 as Mesh).geometry}
						material={materials.lambert1}
					/>
					<mesh
						geometry={(nodes.pPlane7_glass_0 as Mesh).geometry}
						material={materials.glass}
					/>
					<mesh
						geometry={
							(nodes.polySurface332_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={(nodes.pCube277_lambert2_0 as Mesh).geometry}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface333_lambert1_0 as Mesh).geometry
						}
						material={materials.lambert1}
					/>
					<mesh
						geometry={(nodes.pCube288_metal_0 as Mesh).geometry}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface437_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface437_white2_0 as Mesh).geometry
						}
						material={materials.white2}
					/>
					<mesh
						geometry={
							(nodes.polySurface446_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface801_cloth2_0 as Mesh).geometry
						}
						material={materials.cloth2}
					/>
					<mesh
						geometry={
							(nodes.polySurface802_cloth2_0 as Mesh).geometry
						}
						material={materials.cloth2}
					/>
					<mesh
						geometry={
							(nodes.polySurface465_raff_0 as Mesh).geometry
						}
						material={materials.raff}
					/>
					<mesh
						geometry={(nodes.pCube289_lambert1_0 as Mesh).geometry}
						material={materials.lambert1}
					/>
					<mesh
						geometry={(nodes.pCube292_lambert2_0 as Mesh).geometry}
						material={materials.lambert2}
					/>
					<mesh
						geometry={(nodes.pCube292_metal_0 as Mesh).geometry}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface594_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface595_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface596_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface597_curtains_0 as Mesh).geometry
						}
						material={materials.curtains}
					/>
					<mesh
						geometry={
							(nodes.polySurface598_curtains_0 as Mesh).geometry
						}
						material={materials.curtains}
					/>
					<mesh
						geometry={
							(nodes.polySurface599_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface600_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface601_lambert1_0 as Mesh).geometry
						}
						material={materials.lambert1}
					/>
					<mesh
						geometry={
							(nodes.polySurface602_lambert1_0 as Mesh).geometry
						}
						material={materials.lambert1}
					/>
					<mesh
						geometry={
							(nodes.polySurface603_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface818_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface819_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface820_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface938_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface939_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface493_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface492_sofa1_0 as Mesh).geometry
						}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface512_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface513_guitar_0 as Mesh).geometry
						}
						material={materials.guitar}
					/>
					<mesh
						geometry={
							(nodes.polySurface514_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface515_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface516_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface517_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface518_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface519_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface520_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface521_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface522_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface523_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface524_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface525_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface526_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface527_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface528_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface529_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface530_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface531_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface532_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface533_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface534_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface535_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface536_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface537_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface538_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface539_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface540_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface541_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface542_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface543_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface544_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface545_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface546_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface547_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface548_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface549_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface550_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface551_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface552_guitar_0 as Mesh).geometry
						}
						material={materials.guitar}
					/>
					<mesh
						geometry={
							(nodes.polySurface553_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface554_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface556_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface557_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface558_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface576_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface576_cloth_0 as Mesh).geometry
						}
						material={materials.cloth}
					/>
					<mesh
						geometry={
							(nodes.polySurface604_cloth2_0 as Mesh).geometry
						}
						material={materials.cloth2}
					/>
					<mesh
						geometry={
							(nodes.polySurface604_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface605_wood_0 as Mesh).geometry
						}
						material={materials.wood}
					/>
					<mesh
						geometry={(nodes.pCylinder93_sofa1_0 as Mesh).geometry}
						material={materials.sofa1}
					/>
					<mesh
						geometry={
							(nodes.polySurface942_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface943_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface944_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface945_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface946_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface947_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface948_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface949_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface950_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface951_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface952_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface953_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface954_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface955_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface956_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface957_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface958_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface959_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface960_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface961_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface962_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface963_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface964_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface965_guitar_0 as Mesh).geometry
						}
						material={materials.guitar}
					/>
					<mesh
						geometry={
							(nodes.polySurface966_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface967_guitar_0 as Mesh).geometry
						}
						material={materials.guitar}
					/>
					<mesh
						geometry={
							(nodes.polySurface968_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface969_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface970_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface971_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface972_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface973_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface974_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface975_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface976_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface977_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface978_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface979_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface980_yellow_0 as Mesh).geometry
						}
						material={materials.yellow}
					/>
					<mesh
						geometry={
							(nodes.polySurface981_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface982_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface983_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface984_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface985_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface986_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface987_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface988_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface989_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface990_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface991_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface992_yellow_0 as Mesh).geometry
						}
						material={materials.yellow}
					/>
					<mesh
						geometry={
							(nodes.polySurface993_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface994_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface995_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface996_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface997_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface998_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface999_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1000_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1001_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1002_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface1003_yellow_0 as Mesh).geometry
						}
						material={materials.yellow}
					/>
					<mesh
						geometry={
							(nodes.polySurface1004_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1005_yellow_0 as Mesh).geometry
						}
						material={materials.yellow}
					/>
					<mesh
						geometry={
							(nodes.polySurface1006_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1007_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1008_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface1009_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1010_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1011_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1012_yellow_0 as Mesh).geometry
						}
						material={materials.yellow}
					/>
					<mesh
						geometry={
							(nodes.polySurface1013_lambert8_0 as Mesh).geometry
						}
						material={materials.lambert8}
					/>
					<mesh
						geometry={
							(nodes.polySurface1014_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1015_yellow_0 as Mesh).geometry
						}
						material={materials.yellow}
					/>
					<mesh
						geometry={
							(nodes.polySurface1016_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1017_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1018_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1019_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1020_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1021_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1022_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface1023_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface1024_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1025_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1026_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1027_guitar_0 as Mesh).geometry
						}
						material={materials.guitar}
					/>
					<mesh
						geometry={
							(nodes.polySurface1028_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1029_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1030_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface1031_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1032_yellow_0 as Mesh).geometry
						}
						material={materials.yellow}
					/>
					<mesh
						geometry={
							(nodes.polySurface1033_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1034_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1035_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1036_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1037_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1038_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1039_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1040_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1041_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1042_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1043_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1044_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1045_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1046_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface1047_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1048_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1049_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1050_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1051_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1052_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1053_blue_0 as Mesh).geometry
						}
						material={materials.blue}
					/>
					<mesh
						geometry={
							(nodes.polySurface1054_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1055_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1056_wood2_0 as Mesh).geometry
						}
						material={materials.wood2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1057_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface1058_lambert2_0 as Mesh).geometry
						}
						material={materials.lambert2}
					/>
					<mesh
						geometry={
							(nodes.polySurface941_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface941_guitar_0 as Mesh).geometry
						}
						material={materials.guitar}
					/>
					<mesh
						geometry={
							(nodes.polySurface1064_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={
							(nodes.polySurface1064_guitar_0 as Mesh).geometry
						}
						material={materials.guitar}
					/>
					<mesh
						geometry={
							(nodes.polySurface1064_sofa_0 as Mesh).geometry
						}
						material={materials.sofa}
					/>
					<mesh
						geometry={
							(nodes.polySurface1073_metal_0 as Mesh).geometry
						}
						material={materials.metal}
					/>
					<mesh
						geometry={
							(nodes.polySurface1073_curtains_0 as Mesh).geometry
						}
						material={materials.curtains}
					/>
					<mesh
						geometry={
							(nodes.polySurface1302_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1303_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1304_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1305_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1306_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1307_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1308_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1309_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1310_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1311_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1312_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1313_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1314_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1315_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1316_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1317_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1318_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1319_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1320_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1321_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1322_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1323_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1324_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1325_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1326_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1327_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1328_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1329_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1330_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1331_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1332_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1333_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1334_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1335_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1336_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1337_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1338_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1339_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1340_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1341_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1342_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1343_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1344_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1345_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1346_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1347_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1348_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1349_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1350_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1351_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1352_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1353_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1354_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1355_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1356_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1357_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1358_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1359_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1360_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1361_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1362_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1363_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1364_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1365_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1366_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1367_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1368_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1369_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1370_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1371_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1372_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1373_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1374_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1375_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1376_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1377_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1378_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1379_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1380_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1381_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1382_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1383_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1384_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1385_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1386_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1387_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1388_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1389_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1390_lamp_0 as Mesh).geometry
						}
						material={materials.lamp}
					/>
					<mesh
						geometry={
							(nodes.polySurface1391_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1392_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1393_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1394_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1395_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1396_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1397_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1398_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1399_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1400_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1401_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1402_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1403_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1404_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1405_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1406_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1407_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1408_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1409_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1410_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1411_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1412_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1413_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1414_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1415_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1416_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1417_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1418_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1419_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1420_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1421_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1422_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1423_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1424_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1425_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1426_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1427_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1428_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1429_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1430_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1431_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1432_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1433_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1434_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1435_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1436_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1437_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1438_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1439_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1440_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1441_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1442_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1443_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1444_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1445_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1446_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1447_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1448_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1449_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1450_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1451_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1452_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1453_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1454_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1455_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1456_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1457_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1458_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1459_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1460_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1461_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1462_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1463_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1464_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1465_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1466_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1467_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1468_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1469_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1470_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1471_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1472_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1473_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1474_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1475_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1476_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1477_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1478_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1479_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1480_gold_0 as Mesh).geometry
						}
						material={materials.gold}
					/>
					<mesh
						geometry={
							(nodes.polySurface1287_wood_0 as Mesh).geometry
						}
						material={materials.wood}
					/>
					<mesh
						geometry={
							(nodes.polySurface1287_white_0 as Mesh).geometry
						}
						material={materials.white}
					/>
					<mesh
						geometry={(nodes.pDisc1_lambert1_0 as Mesh).geometry}
						material={materials.lambert1}
					/>
					<mesh
						geometry={
							(nodes.polySurface1483_cat_0 as Mesh).geometry
						}
						material={materials.material}
					/>
					<mesh
						geometry={
							(nodes.polySurface1484_lamp_0 as Mesh).geometry
						}
						material={materials.lamp}
					/>
				</group>
			</group>
		</group>
	);
};

useGLTF.preload("assets/room.glb");
export default Room;
