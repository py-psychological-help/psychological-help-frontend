import Documents from './Documents';

export default {
	title: 'Documents',
	component: Documents,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Documents',
	},
};
