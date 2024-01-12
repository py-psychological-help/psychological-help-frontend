import React from 'react';
import PropTypes from 'prop-types';
import cls from './Button.module.scss';

const Button = ({buttonText, additionalStyles}) => {
	const buttonStyles = `${cls.button} ${additionalStyles}`;
	return <button className={buttonStyles}>{buttonText}</button>;
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	additionalStyles: PropTypes.string,
};

Button.defaultProps = {
	additionalStyles: '',
};

export default Button;

