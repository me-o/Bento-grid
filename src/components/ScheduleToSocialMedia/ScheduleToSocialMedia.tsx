import SchedulePosts from '../../assets/images/illustration-schedule-posts.webp';
import { motion } from 'framer-motion';
import { containerMotion, imageMotion, titleMotion } from './motionConfig';
import { twMerge } from 'tailwind-merge';

const ScheduleToSocialMedia = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' bg-purple-100 px-4 py-7 rounded-lg flex flex-col items-center justify-center gap-5 drop-shadow-sm',
				className
			)}
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<motion.div className=" font-medium text-[24px] tracking-tight" variants={titleMotion}>
				Schedule to social media.
			</motion.div>
			<motion.div className="" variants={imageMotion}>
				<img src={SchedulePosts} alt="" />
			</motion.div>
			<motion.div className=" text-[20px] text-center tracking-tight" variants={titleMotion}>
				Optimize post timings to publish content at the perfect time for your audience.
			</motion.div>
		</motion.div>
	);
};
export default ScheduleToSocialMedia;
