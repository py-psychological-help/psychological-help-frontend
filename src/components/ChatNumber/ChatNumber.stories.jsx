import ChatNumber from './ChatNumber';

export default {
	title: 'ChatNumber',
	component: ChatNumber,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'ChatNumber',
	},
};
