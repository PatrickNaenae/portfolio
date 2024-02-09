"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				After graduating with a degree in{" "}
				<span className='font-medium'>Estate Management</span>, I
				decided to pursue my passion for programming. I enrolled in
				Havard's CS50 Introduction to Computer Science online course, and that{" "}
				<span className='font-medium'>
					marked the beginning of my web development journey
				</span>
				.{" "}
				<span className='italic'>My favorite part of programming</span>{" "}
				is the problem-solving aspect. I{" "}
				<span className='underline'>love</span> the feeling of finally
				figuring out a solution to a problem. My core stack is{" "}
				<span className='font-medium'>
					React, Next.js, Python/Django, and Postgresql
				</span>
				. I am also familiar with TypeScript, which is a statically
				typed superset of JavaScript, enhancing code quality and
				catching errors early and ThreeJs whuch is a JavaScript library
				used for creating and displaying 3D graphics in web browsers. I
				am always looking to{" "}
				<span className='font-medium'>learn new technologies</span>
			</p>

			<p>
				<span className='italic'>When I'm not coding</span>, I enjoy
				playing video games, reading books, and playing my keyboard.
			</p>
		</motion.section>
	);
}
