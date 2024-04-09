"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { projects } from "@/lib/data"
import ProjectCard from "./project";



export default function Projects() {
  const { ref } = useSectionInView("Projects");
  // console.log(ref)

  return (
		<section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
			<SectionHeading>My projects</SectionHeading>
			<div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-5'>
				{projects.map((project, index) => (
					<React.Fragment key={index}>
						<ProjectCard index={index} {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
  );
}

