"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn} from "@/lib/motion";
import Image, {StaticImageData} from "next/image";


interface ProjectCardProps {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: StaticImageData;
	source_code_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}: ProjectCardProps) => {
	return (
		<motion.div
			variants={fadeIn({
				direction: "up",
				type: "spring",
				delay: index * 0.5,
				duration: 0.75,
			})}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-5 rounded-2xl sm:w-[360px] w-full'>
				<div className='relative w-full h-[230px]'>
					<Image
						src={image}
						alt='project_image'
						width={100}
						className='w-full h-full object-cover rounded-2xl'
					/>

					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() =>
								window.open(source_code_link, "_blank")
							}
							className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
							<img
								src={"/images/github.png"}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='font-bold text-[24px] text-gray-700 dark:text-white/80'>{name}</h3>
					<p className='mt-2 text-[14px] text-gray-700 dark:text-white/80'>
						{description}
					</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

export default ProjectCard