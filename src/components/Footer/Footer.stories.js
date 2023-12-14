import { within, userEvent } from '@storybook/testing-library';

import Footer from './Footer';

export default {
	title: 'Example/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
	},
};

export const LoggedOut = {};

export const LoggedIn = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loginButton = await canvas.getByRole('button', {
			name: /Log in/i,
		});
		await userEvent.click(loginButton);
	},
};
