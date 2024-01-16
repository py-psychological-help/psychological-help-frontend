import AccountInfo from './AccountInfo';

export default {
	title: 'Example/AccountInfo',
	component: AccountInfo,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'AccountInfo',
	},
};
