import AccountPrinciples from "./AccountPrinciples";

export default {
	title: 'Example/AccountPrinciples',
	component: AccountPrinciples,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'AccountPrinciples',
	},
};
