import Chats from './Chats';

export default {
	title: 'Chats',
	component: Chats,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Chats',
	},
};
