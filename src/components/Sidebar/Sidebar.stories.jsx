import Sidebar from './Sidebar';

export default {
	title: 'Example/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Sidebar',
	},
};
