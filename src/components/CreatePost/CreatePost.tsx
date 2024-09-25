import createPostImage from '../../assets/images/illustration-create-post.webp';
import { motion } from 'framer-motion';
import { containerMotion } from './motionConfig';
import { twMerge } from 'tailwind-merge';

const CreatePost = ({ className }: PropsType) => {
	return (
		<motion.div
			className={twMerge(
				' bg-yellow-100 rounded-lg drop-shadow-md py-8 pl-8 space-y-[18px]',
				className,
				' lg:grid lg:place-content-center'
			)}
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" font-medium text-[26px] lg:text-[32px]">
				Create and schedule content <span className=" text-purple-500 italic">quicker.</span>
			</div>
			<div className=" w-[190px]">
				<img src={createPostImage} alt="illustration-create-post" />
			</div>
		</motion.div>
	);
};
export default CreatePost;
