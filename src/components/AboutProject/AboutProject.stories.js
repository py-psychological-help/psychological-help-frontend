import AboutProject from './AboutProject';

export default {
	title: 'Example/AboutProject',
	component: AboutProject,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'AboutProject',
	},
};

export const Secondary = {
	args: {
		label: 'AboutProject',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'AboutProject',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'AboutProject',
	},
};
