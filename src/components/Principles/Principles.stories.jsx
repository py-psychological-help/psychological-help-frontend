import Principles from './Principles';

export default {
	title: 'Principles',
	component: Principles,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Principles',
	},
};
