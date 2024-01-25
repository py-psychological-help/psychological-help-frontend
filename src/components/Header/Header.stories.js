import Header from './Header';

export default {
	title: 'Example/Header',
	component: Header,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Header',
	},
};

export const Secondary = {
	args: {
		label: 'Header',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'Header',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'Header',
	},
};
