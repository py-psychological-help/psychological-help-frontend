import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cls from './Button.module.scss';

const Button = ({ buttonText, to, additionalStyles }) => {
    const buttonStyles = `${cls.button} ${additionalStyles}`;
    return (
        <NavLink to={to} className={buttonStyles} activeClassName={cls.active}>
            {buttonText}
        </NavLink>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    additionalStyles: PropTypes.string,
    to: PropTypes.string.isRequired,
};

Button.defaultProps = {
    additionalStyles: '',
};

export default Button;
