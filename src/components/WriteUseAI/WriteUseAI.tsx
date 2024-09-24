import aiContent from '../../assets/images/illustration-ai-content.webp';
import { motion } from 'framer-motion';
import { containerMotion } from './motionConfig';

const WriteUseAI = () => {
	return (
		<motion.div
			className=" bg-yellow-500 rounded-lg drop-shadow-md p-5 space-y-5"
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" text-[30px] font-medium">Write your content using AI.</div>
			<div className=" w-[220px]">
				<img src={aiContent} alt="" />
			</div>
		</motion.div>
	);
};
export default WriteUseAI;
