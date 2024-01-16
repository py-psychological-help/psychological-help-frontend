import Messages from './Messages';

export default {
	title: 'Messages',
	component: Messages,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Messages',
	},
};
