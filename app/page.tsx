"use client";

import { useState, Suspense } from "react";
import About from "@/components/about";
import { Canvas } from "@react-three/fiber";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import { LoadingScreen } from "@/components/loading-screen";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Cursor } from "@/components/cursor";

export default function Home() {
	const [started, setStarted] = useState(false);
	return (
		<>
			<LoadingScreen started={started} setStarted={setStarted} />
			<main className='flex flex-col items-center px-4'>
				<Intro />
				<SectionDivider />
				<About />
				<Projects />
				<Suspense>{started && <Skills />}</Suspense>
				<Experience />
				<Contact />
				<Cursor />
			</main>
		</>
	);
}
