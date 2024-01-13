import AboutHelpPage from './AboutHelpPage';

export default {
	title: 'Example/AboutHelpPage',
	component: AboutHelpPage,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'AboutHelpPage',
	},
};
