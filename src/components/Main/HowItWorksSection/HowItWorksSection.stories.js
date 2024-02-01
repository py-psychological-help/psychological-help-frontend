import HowItWorksSection from './HowItWorksSection';

export default {
	title: 'Example/HowItWorksSection',
	component: HowItWorksSection,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'HowItWorksSection',
	},
};

export const Secondary = {
	args: {
		label: 'HowItWorksSection',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'HowItWorksSection',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'HowItWorksSection',
	},
};
