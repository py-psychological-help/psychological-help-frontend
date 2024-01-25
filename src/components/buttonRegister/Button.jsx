import cls from './Button.module.scss';

const Button = ({ name, type, isValid }) => {
	return (
		<button className={cls.button} type={type} disabled={!isValid}>
			{name}
		</button>
	);
};

export default Button;
