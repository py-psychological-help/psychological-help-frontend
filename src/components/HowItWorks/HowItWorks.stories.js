import HowItWorks from './HowItWorks';

export default {
	title: 'Example/HowItWorks',
	component: HowItWorks,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'HowItWorks',
	},
};

export const Secondary = {
	args: {
		label: 'HowItWorks',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'HowItWorks',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'HowItWorks',
	},
};
