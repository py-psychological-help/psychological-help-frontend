import Chat from './Chat';

export default {
	title: 'Chat',
	component: Chat,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Chat',
	},
};
