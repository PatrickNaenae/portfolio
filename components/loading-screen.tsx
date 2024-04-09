import { useProgress } from "@react-three/drei";
import { useEffect, Dispatch, SetStateAction } from "react";

interface LoadingScreenProps {
	started: boolean;
	setStarted: Dispatch<SetStateAction<boolean>>;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
	started,
	setStarted,
}) => {
	const { progress, total, loaded, item } = useProgress();

	useEffect(() => {
		console.log(progress, total, loaded, item);
		if (progress === 100) {
			setTimeout(() => {
				setStarted(true);
			}, 500);
		}
	}, [progress, total, loaded, item, setStarted]);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none flex items-center justify-center bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 
            ${started ? "opacity-0" : "opacity-100"}`}>
			<div className='text-4xl md:text-9xl font-bold text-gray-950 text-black/40 text-opacity-75 dark:text-white dark:text-opacity-80 relative'>
				<div
					className='absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500'
					style={{
						width: `${progress}%`,
					}}>
					Bocco Aniefiok
				</div>
				<div className='opacity-40'>Bocco Aniefiok</div>
			</div>
		</div>
	);
};
