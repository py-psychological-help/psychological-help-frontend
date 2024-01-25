import React from 'react';
import PropTypes from 'prop-types';
import cls from './Button.module.scss';

const Button = ({ buttonText, additionalStyles, onClick }) => {
	const buttonStyles = `${cls.button} ${additionalStyles}`;
	return (
		<button className={buttonStyles} onClick={onClick}>
			{buttonText}
		</button>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	additionalStyles: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	additionalStyles: '',
	onClick: () => {},
};

export default Button;
