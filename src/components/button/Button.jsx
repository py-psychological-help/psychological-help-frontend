import cls from './Button.module.scss';

const Button = ({ name, type = 'button' }) => {
	return (
		<button className={cls.button} type={type}>
			{name}
		</button>
	);
};

export default Button;
