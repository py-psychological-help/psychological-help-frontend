import AuthNavigation from './AuthNavigation';

export default {
	title: 'Example/AuthNavigation',
	component: AuthNavigation,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'AuthNavigation',
	},
};

export const Secondary = {
	args: {
		label: 'AuthNavigation',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'AuthNavigation',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'AuthNavigation',
	},
};
