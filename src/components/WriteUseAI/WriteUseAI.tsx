import aiContent from '../../assets/images/illustration-ai-content.webp';
import { motion } from 'framer-motion';
import { containerMotion } from './motionConfig';
import { twMerge } from 'tailwind-merge';

const WriteUseAI = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' bg-yellow-500 rounded-lg drop-shadow-md p-5 space-y-5',
				className,
				' lg:grid lg:place-content-center lg:space-y-[3rem]'
			)}
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" text-[30px] font-medium lg:text-[36px] lg:tracking-tight">
				Write your content using AI.
			</div>
			<div className=" w-[220px]">
				<img src={aiContent} alt="illustration-ai-content" />
			</div>
		</motion.div>
	);
};
export default WriteUseAI;
