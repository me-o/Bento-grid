import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ulMotion, liMotion, containerMotion } from './motionConfig';
import { IconYellow } from '../../iconThemeConfig';

const SocialMedia = () => {
	return (
		<motion.div
			className=" py-10 rounded-lg bg-purple-500 text-white text-center relative"
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" mx-[45px] text-[42px] font-medium">
				Social Media <span className=" text-yellow-500 ">10x </span>
				<span className=" italic  relative">Faster</span> with AI
			</div>

			{/* stars */}
			<motion.ul className=" my-6 mb-2 flex items-center justify-center gap-3" variants={ulMotion}>
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
