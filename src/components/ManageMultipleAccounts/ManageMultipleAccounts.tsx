import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';
import { IconPurple } from '../../iconThemeConfig';
import { FC } from 'react';
import { containerMotion, liMotion, ulMotion } from './motionConfig';

type CardItemType = {
	icon?: React.ReactNode;
	followers: number | string;
};

const CardItem: FC<CardItemType> = ({ icon, followers }) => {
	return (
		<motion.li className=" drop-shadow-md rounded-full bg-white flex items-center p-2 gap-2" variants={liMotion}>
			{/* icon */}
			<div className=" w-[44px] aspect-square rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
				{/* default icon */}
				{icon ?? <Instagram color={IconPurple} size={22} />}
			</div>

			{/* user */}
			<div className=" space-y-1">
				<div className=" text-[16px]">@YourCo</div>
				<div className=" text-[12px] text-gray-400">
					<span className=" mr-1">{followers || '-'}</span>
					Followers
				</div>
			</div>
		</motion.li>
	);
};

const CARD_DATA = [
	{
		id: 1,
		followers: '12k',
		icon: <Instagram color={IconPurple} size={22} />,
	},
	{
		id: 2,
		followers: '8k',
		icon: <Twitter color={IconPurple} size={22} />,
	},
];

const ManageMultipleAccounts = () => {
	return (
		<motion.div
			className=" bg-white drop-shadow-lg rounded-lg py-5  px-4 space-y-4"
			initial="hidden"
			whileInView="show"
			variants={containerMotion}
		>
			<motion.ul className=" grid grid-cols-2 gap-3" variants={ulMotion}>
				{CARD_DATA.map(item => (
					<CardItem {...item} key={item.id} />
				))}
			</motion.ul>

			<h2 className=" font-medium text-[24px] tracking-tight">Manage multiple accounts and platforms.</h2>
		</motion.div>
	);
};
export default ManageMultipleAccounts;
