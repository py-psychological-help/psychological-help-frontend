import HowItWorksPage from './HowItWorksPage';

export default {
	title: 'Example/HowItWorksPage',
	component: HowItWorksPage,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'HowItWorksPage',
	},
};
