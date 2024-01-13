import ClientSide from './ClientSide';

export default {
	title: 'ClientSide',
	component: ClientSide,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'ClientSide',
	},
};
