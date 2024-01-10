import PropTypes from 'prop-types';
import cls from './Button.module.scss';

const Button = ({ name, type = 'button' }) => {
	return (
		<button className={cls.button} type={type}>
			{name}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.number.isRequired,
};

export default Button;
