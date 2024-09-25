import growFollowers from '../../assets/images/illustration-grow-followers.webp';
import { motion } from 'framer-motion';
import { containerMotion } from './motionConfig';
import { twMerge } from 'tailwind-merge';

const GrowFollowers = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' drop-shadow-md bg-purple-500 rounded-lg py-6 px-[57px] flex flex-col items-center justify-center gap-[38px] overflow-hidden',
				className,
				'lg:flex-row lg:p-[23px] lg:gap-4'
			)}
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" flex-shrink-0 lg:w-[227px]">
				<img src={growFollowers} alt="illustration-grow-followers" />
			</div>
			<div className=" text-white font-medium text-[30px] text-center tracking-tight lg:text-start lg:text-[38px]">
				Grow followers with non-stop content.
			</div>
		</motion.div>
	);
};
export default GrowFollowers;
