"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { EarthCanvas } from "./canvas";
import { slideIn } from "@/lib/motion";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='mb-20 sm:mb-28 w-[min(100%,80vw)] text-center'
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}>
			<SectionHeading>Contact me</SectionHeading>

			<p className='text-gray-700 -mt-6 dark:text-white/80'>
				Please contact me directly at{" "}
				<a className='underline' href='mailto:naenaepatrick@gmail.com'>
					naenaepatrick@gmail.com
				</a>{" "}
				or through this form.
			</p>

			<div
				className={`xl:mt-12 flex h-full xl:flex-row flex-col-reverse gap-0 lg:gap-10 overflow-hidden`}>
				<motion.div
				variants={slideIn({
					direction: "left",
					type: "tween",
					delay: 0.2,
					duration: 1,
				})}
				className='flex-1 md:flex-[0.75] bg-black-100 p-0 md:p-8 rounded-2xl'>
				<form
					className='mt-10 flex flex-col dark:text-black'
					action={async (formData) => {
						const { data, error } = await sendEmail(formData);

						if (error) {
							toast.error(error);
							return;
						}

						toast.success("Email sent successfully!");
					}}>
					<input
						className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
						name='senderEmail'
						type='email'
						required
						maxLength={500}
						placeholder='Your email'
					/>
					<textarea
						className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
						name='message'
						placeholder='Your message'
						required
						maxLength={5000}
					/>
					<SubmitBtn />
				</form>
				</motion.div>
				<motion.div
					variants={slideIn({
						direction: "right",
						type: "tween",
						delay: 0.2,
						duration: 1,
					})}
					className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
					<EarthCanvas />
				</motion.div>
			</div>
		</motion.section>
	);
}
