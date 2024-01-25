import WorkWithUsSection from './WorkWithUsSection';

export default {
	title: 'Example/WorkWithUsSection',
	component: WorkWithUsSection,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'WorkWithUsSection',
	},
};

export const Secondary = {
	args: {
		label: 'WorkWithUsSection',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'WorkWithUsSection',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'WorkWithUsSection',
	},
};
