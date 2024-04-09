import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mozfin from "@/public/images/mozfin.jpeg";
import zpaytech from "@/public/images/zpaytech.png";
import topuniverse from "@/public/images/topuniverse.jpeg";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Havard CS50 certificate",
		location: "Online Harvard Course",
		description:
			"I took Havard CS50 courses (Introduction to Computer Science, Introduction to Web Development, Introduction to Python) to kickstart my career in tech. ",
		icon: React.createElement(LuGraduationCap),
		date: "2021",
	},
	{
		title: "Fullstack Developer / IT Manager",
		location: "Lagos",
		description:
			"I work as a fullstack developer for a microfinance Bank and also a freelance developer. My stack includes React, Next.js, TypeScript, Tailwind, Python/Django and Postgresql ",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - Date",
	},
	// {
	//   title: "Full-Stack Developer",
	//   location: "Houston, TX",
	//   description:
	//     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
	//   icon: React.createElement(FaReact),
	//   date: "2021 - present",
	// },
] as const;

export const projects = [
	{
		name: "Mozfin Microfinance",
		description:
			"Web-based company website that allows users see the profile of what Mozfin Microfinance bank is all about. Their services, about the bank and what they offer.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: mozfin,
		source_code_link: "http://mozfin.com/",
	},
	{
		name: "Zpay Tech",
		description:
			"Zpay is a cutting-edge fintech company driven by a team of passionate professionals who share a common goal to transform the financial landscape.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: zpaytech,
		source_code_link: "http://zpaytech.com/",
	},
	{
		name: "Top Universe",
		description:
			"E-Learning platform to empower digital training in African communities, built with Vue on the frontend with the team at Top Universe.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: topuniverse,
		source_code_link: "https://topuniverse.org/cohort/",
	},
];

export const technologies = [
	{
		name: "HTML 5",
		icon: "textures/html.svg",
	},
	{
		name: "CSS 3",
		icon: "textures/css.svg",
	},
	{
		name: "JavaScript",
		icon: "textures/javascript.svg",
	},
	{
		name: "TypeScript",
		icon: "textures/typescript.svg",
	},
	{
		name: "React JS",
		icon: "textures/react.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "textures/redux.svg",
	},
	{
		name: "Tailwind CSS",
		icon: "textures/tailwind.svg",
	},
	{
		name: "Three JS",
		icon: "textures/threejs.svg",
	},
	{
		name: "git",
		icon: "textures/git.svg",
	},
	{
		name: "python",
		icon: "textures/python.svg",
	},
	{
		name: "django",
		icon: "textures/django.svg",
	},
] as const;
