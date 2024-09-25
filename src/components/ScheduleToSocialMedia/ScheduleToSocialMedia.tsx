import SchedulePosts from '../../assets/images/illustration-schedule-posts.webp';
import { motion } from 'framer-motion';
import { containerMotion, imageMotion, titleMotion } from './motionConfig';
import { twMerge } from 'tailwind-merge';

const ScheduleToSocialMedia = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' bg-purple-100 px-4 py-7 rounded-lg flex flex-col items-center justify-center gap-5 drop-shadow-sm',
				className,
				' lg:grid lg:place-content-center lg:p-0 lg:pl-8 lg:overflow-hidden lg:gap-0'
			)}
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<motion.div className=" font-medium text-[24px] tracking-tight lg:text-[32px]" variants={titleMotion}>
				Schedule to social media.
			</motion.div>
			<motion.div variants={imageMotion} className=" lg:pt-5 lg:pb-[26px]">
				<img
					src={SchedulePosts}
					alt="illustration-schedule-posts"
					className=" lg:h-[320px] w-[unset] object-cover object-left"
				/>
			</motion.div>
			<motion.div
				className=" text-[20px] text-center tracking-tight lg:text-start lg:mr-[25px]  lg:leading-5"
				variants={titleMotion}
			>
				Optimize post timings to publish content at the perfect time for your audience.
			</motion.div>
		</motion.div>
	);
};
export default ScheduleToSocialMedia;
