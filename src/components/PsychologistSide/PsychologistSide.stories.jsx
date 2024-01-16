import PsychologistSide from './PsychologistSide';

export default {
	title: 'PsychologistSide',
	component: PsychologistSide,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'PsychologistSide',
	},
};
