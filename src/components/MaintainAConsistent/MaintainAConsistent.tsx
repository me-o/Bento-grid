import { motion } from 'framer-motion';
import ConsistentSchedule from '../../assets/images/illustration-consistent-schedule.webp';
import { containerMotion, imageMotion, titleMotion } from './motionConfig';
import { twMerge } from 'tailwind-merge';

const MaintainAConsistent = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' bg-yellow-500 rounded-lg px-4 pt-4 h-[215px] overflow-hidden lg:px-6 lg:pt-6',
				className
			)}
			layout
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<motion.div className=" mb-4 font-medium text-[24px] tracking-tight lg:text-[36px]" variants={titleMotion}>
				Maintain a consistent posting schedule.
			</motion.div>

			<motion.div className=" w-[209px] relative lg:w-fit" variants={imageMotion}>
				<img src={ConsistentSchedule} alt="illustration-consistent-schedule" />
			</motion.div>
		</motion.div>
	);
};
export default MaintainAConsistent;
