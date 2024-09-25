export const containerMotion = {
	hidden: { opacity: 0, x: -200 },
	show: {
		opacity: 1,
		x: 0,
		transition: { when: 'beforeChildren' },
	},
};

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
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};
