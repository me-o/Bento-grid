import audienceGrowth from '../../assets/images/illustration-audience-growth.webp';
import { motion } from 'framer-motion';
import { containerMotion } from './motionConfig';

const Growth = () => {
	return (
		<motion.div
			className=" rounded-lg drop-shadow-md bg-white p-6"
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" text-[18px]">
				<div className=" font-medium text-[30px] mb-[18px]">&gt;56% </div>
				<div className=" mb-[22px]">faster audience growth</div>
			</div>

			{/*  */}
			<div className=" w-[180px]">
				<img src={audienceGrowth} alt="" />
			</div>
		</motion.div>
	);
};
export default Growth;
