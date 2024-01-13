import RegisterPage from './RegisterPage';

export default {
	title: 'Example/RegisterPage',
	component: RegisterPage,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'RegisterPage',
	},
};
