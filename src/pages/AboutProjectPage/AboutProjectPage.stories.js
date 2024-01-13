import AboutProjectPage from './AboutProjectPage';

export default {
	title: 'Example/AboutProjectPage',
	component: AboutProjectPage,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'AboutProjectPage',
	},
};
