import createPostImage from '../../assets/images/illustration-create-post.webp';
import { motion } from 'framer-motion';
import { containerMotion } from './motionConfig';

const CreatePost = () => {
	return (
		<motion.div
			className=" bg-yellow-100 rounded-lg drop-shadow-md py-8 pl-8 space-y-[18px]"
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<div className=" font-medium text-[26px]">
				Create and schedule content <span className=" text-purple-500 italic">quicker.</span>
			</div>
			<div className=" w-[190px]">
				<img src={createPostImage} alt="" />
			</div>
		</motion.div>
	);
};
export default CreatePost;
