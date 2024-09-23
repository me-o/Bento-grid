export const containerMotion = {
	hidden: { opacity: 0, x: -200 },
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
	hidden: { opacity: 0, width: 0, height: 0 },
	show: { opacity: 1, width: '100%', height: '100%', transition: { during: 0.3 } },
};
