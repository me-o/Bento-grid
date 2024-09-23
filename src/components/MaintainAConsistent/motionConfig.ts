export const containerMotion = {
	hidden: { opacity: 0, x: 200 },
	show: {
		opacity: 1,
		x: 0,
		transition: { when: 'beforeChildren' },
	},
};

export const titleMotion = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

export const imageMotion = {
	hidden: { y: 150 },
	show: { y: 0 },
};
