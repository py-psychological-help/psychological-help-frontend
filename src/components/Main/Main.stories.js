import Main from './Main';

export default {
	title: 'Example/Main',
	component: Main,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Main',
	},
};

export const Secondary = {
	args: {
		label: 'Main',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'Main',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'Main',
	},
};
