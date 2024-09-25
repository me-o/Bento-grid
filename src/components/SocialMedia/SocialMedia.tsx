import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ulMotion, liMotion, containerMotion } from './motionConfig';
import { IconYellow } from '../../iconThemeConfig';
import { twMerge } from 'tailwind-merge';

const SocialMedia = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' py-10 rounded-lg bg-purple-500 text-white text-center relative',
				className,
				'lg:grid lg:place-content-center lg:py-0'
			)}
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" mx-[45px] text-[42px] font-medium lg:mx-0 lg:text-[58px]">
				Social Media <span className=" text-yellow-500 ">10x </span>
				<span className=" italic  relative">Faster</span> with AI
			</div>

			{/* stars */}
			<motion.ul className=" my-6 mb-2 flex items-center justify-center gap-3 lg:mb-4" variants={ulMotion}>
				{[...Array(5).keys()].map(item => (
					<motion.li key={item} variants={liMotion}>
						<Star color={IconYellow} fill={IconYellow} size={28}></Star>
					</motion.li>
				))}
			</motion.ul>

			<div className=" text-yellow-100 text-[1.125rem]">Over 4,000 5-star reviews</div>
		</motion.div>
	);
};
export default SocialMedia;
