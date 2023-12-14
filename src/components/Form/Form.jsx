import React from 'react';
import cls from './Form.module.scss';
import Button from '../button/Button';

const Form = () => {
	return (
		<form>
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<Button />
		</form>
	);
};

export default Form;
