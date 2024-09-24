import growFollowers from '../../assets/images/illustration-grow-followers.webp';
import { motion } from 'framer-motion';
import { containerMotion } from './motionConfig';
import { twMerge } from 'tailwind-merge';

const GrowFollowers = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' drop-shadow-md bg-purple-500 rounded-lg py-6 px-[57px] flex flex-col items-center justify-center gap-[38px] overflow-hidden',
				className
			)}
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className="">
				<img src={growFollowers} alt="" />
			</div>
			<div className=" text-white font-medium text-[30px] text-center tracking-tight">
				Grow followers with non-stop content.
			</div>
		</motion.div>
	);
};
export default GrowFollowers;
