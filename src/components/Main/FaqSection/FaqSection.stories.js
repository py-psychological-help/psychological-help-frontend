import FaqSection from './FaqSection';

export default {
	title: 'Example/FaqSection',
	component: FaqSection,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'FaqSection',
	},
};

export const Secondary = {
	args: {
		label: 'FaqSection',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'FaqSection',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'FaqSection',
	},
};
