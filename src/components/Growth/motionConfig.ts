export const containerMotion = {
	hidden: { opacity: 0, x: -200 },
	show: {
		opacity: 1,
		x: 0,
		transition: { when: 'beforeChildren' },
	},
};
