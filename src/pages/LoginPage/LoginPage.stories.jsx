import LoginPage from './LoginPage';

export default {
	title: 'Example/LoginPage',
	component: LoginPage,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'LoginPage',
	},
};
