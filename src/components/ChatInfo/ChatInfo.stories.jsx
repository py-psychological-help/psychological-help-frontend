import ChatInfo from './ChatInfo';

export default {
	title: 'ChatInfo',
	component: ChatInfo,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'ChatInfo',
	},
};
