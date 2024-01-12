import Navigation from './Navigation';

export default {
	title: 'Example/Navigation',
	component: Navigation,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Navigation',
	},
};

export const Secondary = {
	args: {
		label: 'Navigation',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'Navigation',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'Navigation',
	},
};
