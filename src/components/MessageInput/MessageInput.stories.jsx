import MessageInput from './MessageInput';

export default {
	title: 'MessageInput',
	component: MessageInput,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'MessageInput',
	},
};
