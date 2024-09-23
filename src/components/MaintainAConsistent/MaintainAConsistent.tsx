import { motion } from 'framer-motion';
import ConsistentSchedule from '../../assets/images/illustration-consistent-schedule.webp';
import { containerMotion, imageMotion, titleMotion } from './motionConfig';

const MaintainAConsistent = () => {
	return (
		<motion.div
			className=" bg-yellow-500 rounded-lg px-4 pt-4 max-h-[215px] overflow-hidden"
			layout
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<motion.div className=" mb-4 font-medium text-[24px] tracking-tight" variants={titleMotion}>
				Maintain a consistent posting schedule.
			</motion.div>

			<motion.div className=" w-[209px] relative" variants={imageMotion}>
				<img src={ConsistentSchedule} alt="illustration-consistent-schedule" />
			</motion.div>
		</motion.div>
	);
};
export default MaintainAConsistent;
