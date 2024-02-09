"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { technologies } from "@/lib/data";



const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
		<section
			id='skills'
			ref={ref}
			className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
			<SectionHeading>My skills</SectionHeading>
			<div className='flex flex-row flex-wrap justify-center gap-10'>
				{technologies.map((technology) => (
					<div className='w-28 h-28' key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</section>
  );
}
