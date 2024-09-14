export const ulMotion = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3, // 0.5s delay
		},
	},
};

export const liMotion = {
	hidden: { opacity: 0, rotate: 45 },
	show: { opacity: 1, rotate: 0 },
};
