import Principle from './Principle';

export default {
	title: 'Principle',
	component: Principle,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Principle',
	},
};
