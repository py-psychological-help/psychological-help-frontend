import { memo } from 'react';
import cls from './SucessRegisterPage.module.scss';

const SucessRegisterPage = memo(() => {
	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Регистрация прошла успешно!</h1>
			<p className={cls.paragraph}>
				Для входа в личный кабинет перейдите по ссылке из письма вашей
				почты.
			</p>
		</div>
	);
});

export default SucessRegisterPage;
