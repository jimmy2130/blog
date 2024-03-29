export const COLORS = {
	light: {
		color: {
			'gray-10': 'hsl(24deg 1% 99%)',
			'gray-50': 'hsl(24deg 9% 98%)',
			'gray-100': 'hsl(24deg 5% 96%)',
			'gray-200': 'hsl(24deg 6% 90%)',
			'gray-300': 'hsl(24deg 6% 83%)',
			'gray-400': 'hsl(24deg 5% 64%)',
			'gray-500': 'hsl(24deg 5% 45%)',
			'gray-600': 'hsl(24deg 5% 32%)',
			'gray-700': 'hsl(24deg 6% 25%)',
			'gray-800': 'hsl(24deg 6% 15%)',
			'gray-900': 'hsl(24deg 10% 10%)',
			'primary-50': 'hsl(40deg 95% 92%)',
			'primary-100': 'hsl(40deg 93% 78%)',
			'primary-200': 'hsl(40deg 55% 63%)',
			'primary-300': 'hsl(40deg 41% 48%)',
			'primary-400': 'hsl(40deg 55% 34%)',
			'primary-500': 'hsl(40deg 94% 20%)',
			warning: 'hsl(0deg 70% 44%)',
			'warning-background': 'hsl(0deg 88% 88%)',
			success: 'hsl(122deg 85% 25%)',
			'success-background': 'hsl(122deg 62% 89%)',
		},
		syntax: {
			'background-light-blue': 'hsl(213deg 92% 85%)',
			'background-light-gray': 'hsl(24deg 20% 95%)',
			black: 'hsl(0deg 0% 0%)',
			slategray: 'hsl(210deg 13% 50%)',
			gray: 'hsl(0deg 0% 60%)',
			tag: 'hsl(327deg 100% 30%)',
			selector: 'hsl(80deg 100% 30%)',
			operator: 'hsl(33deg 45% 42%)',
			keyword: 'hsl(198deg 100% 33%)',
			function: 'hsl(348deg 68% 58%)',
			regex: 'hsl(39deg 100% 47%)',
		},
	},
	dark: {
		color: {
			'gray-10': 'hsl(24deg 1% 99%)',
			'gray-50': 'hsl(24deg 9% 98%)',
			'gray-100': 'hsl(24deg 5% 96%)',
			'gray-200': 'hsl(24deg 6% 90%)',
			'gray-300': 'hsl(24deg 6% 83%)',
			'gray-400': 'hsl(24deg 5% 64%)',
			'gray-500': 'hsl(24deg 5% 45%)',
			'gray-600': 'hsl(24deg 5% 32%)',
			'gray-700': 'hsl(24deg 6% 25%)',
			'gray-800': 'hsl(24deg 6% 15%)',
			'gray-900': 'hsl(24deg 10% 10%)',
			'primary-50': 'hsl(40deg 95% 92%)',
			'primary-100': 'hsl(40deg 93% 78%)',
			'primary-200': 'hsl(40deg 55% 63%)',
			'primary-300': 'hsl(40deg 41% 48%)',
			'primary-400': 'hsl(40deg 55% 34%)',
			'primary-500': 'hsl(40deg 94% 20%)',
			warning: 'hsl(0deg 70% 44%)',
			'warning-background': 'hsl(0deg 88% 88%)',
			success: 'hsl(122deg 85% 25%)',
			'success-background': 'hsl(122deg 62% 89%)',
		},
		syntax: {
			'background-light-blue': 'hsl(213deg 92% 85%)',
			'background-light-gray': 'hsl(24deg 20% 95%)',
			black: 'hsl(0deg 0% 0%)',
			slategray: 'hsl(210deg 13% 50%)',
			gray: 'hsl(0deg 0% 60%)',
			tag: 'hsl(327deg 100% 30%)',
			selector: 'hsl(80deg 100% 30%)',
			operator: 'hsl(33deg 45% 42%)',
			keyword: 'hsl(198deg 100% 33%)',
			function: 'hsl(348deg 68% 58%)',
			regex: 'hsl(39deg 100% 47%)',
		},
	},
};

const BREAKPOINTS = {
	laptopMax: 1400, //not yet decided
	tabletMax: 820,
	phoneMax: 480,
};

export const QUERIES = {
	laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
	tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
	phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
};

export const CONTENT_MAX_WIDTH = 630;
export const CONTENT_BREATHING_ROOM = 24;
