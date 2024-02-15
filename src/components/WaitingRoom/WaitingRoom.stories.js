import WaitingRoom from './WaitingRoom';

export default {
	title: 'Example/HowItWorks',
	component: WaitingRoom,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'WaitingRoom',
	},
};

export const Secondary = {
	args: {
		label: 'WaitingRoom',
	},
};

export const Large = {
	args: {
		size: 'large',
		label: 'WaitingRoom',
	},
};

export const Small = {
	args: {
		size: 'small',
		label: 'WaitingRoom',
	},
};
