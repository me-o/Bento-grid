export const containerMotion = {
	hidden: { opacity: 0, x: -200 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.3, // 0.3s delay
		},
	},
};

export const ulMotion = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.3, // 0.5s delay
		},
	},
};

export const liMotion = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};
