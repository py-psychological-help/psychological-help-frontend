import Message from './Message';

export default {
	title: 'Message',
	component: Message,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Message',
	},
};
