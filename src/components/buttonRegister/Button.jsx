import { memo } from 'react';
import cls from './Button.module.scss';

const Button = memo(({ name, type, isValid }) => {
	return (
		<button className={cls.button} type={type} disabled={!isValid}>
			{name}
		</button>
	);
});

export default Button;
