import React, { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.8;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

interface CursorProps {}

export const Cursor: React.FC<CursorProps> = () => {
	const cursorOutline = useRef<HTMLDivElement>(null);
	const [hoverButton, setHoverButton] = useState(false);

	const animate = () => {
		let distX = mouseX - outlineX;
		let distY = mouseY - outlineY;

		outlineX = outlineX + distX * CURSOR_SPEED;
		outlineY = outlineY + distY * CURSOR_SPEED;

		if (cursorOutline.current) {
			cursorOutline.current.style.left = `${outlineX}px`;
			cursorOutline.current.style.top = `${outlineY}px`;
		}

		requestAnimationFrame(animate);
	};

	useEffect(() => {
		const mouseEventsListener = (event: MouseEvent) => {
			mouseX = event.pageX;
			mouseY = event.pageY;
		};

		document.addEventListener("mousemove", mouseEventsListener);
		const animateEvent = requestAnimationFrame(animate);

		return () => {
			document.removeEventListener("mousemove", mouseEventsListener);
			cancelAnimationFrame(animateEvent);
		};
	}, []);

	useEffect(() => {
		const mouseEventListener = (e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (
				target &&
				(target.tagName.toLowerCase() === "button" ||
					(target.parentElement &&
						target.parentElement.tagName.toLowerCase() ===
							"button") ||
					target.tagName.toLowerCase() === "input" ||
					target.tagName.toLowerCase() === "textarea")
			) {
				setHoverButton(true);
			} else {
				setHoverButton(false);
			}
		};

		document.addEventListener("mouseover", mouseEventListener);

		return () => {
			document.removeEventListener("mouseover", mouseEventListener);
		};
	}, []);

	return (
		<>
			<div
				className={`invisible md:visible z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
			hoverButton
				? "bg-transparent border-2 border-indigo-900 w-5 h-5"
				: "bg-gray-950 border-black/40 bg-opacity-75 dark:bg-white dark;bg-opacity-80 dark:shadow-lg dark:shadow-black/[0.03] w-3 h-3"
		}`}
				ref={cursorOutline}></div>
		</>
	);
};
