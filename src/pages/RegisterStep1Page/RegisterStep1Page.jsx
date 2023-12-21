import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cls from './RegisterStep1Page.module.scss';
import Button from '../../components/button/Button';

const RegisterStep1Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className={cls.step1}>
            <h1 className={cls.heading}>Регистрация шаг 1</h1>
            <p className={cls.description}>Краткое описание</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={cls.form}
                noValidate
            >
                <input
                    {...register('email', { required: true })}
                    placeholder="Почта"
                    type="email"
                />
                {errors.email && <span>Это обязательное поле</span>}
                <input
                    {...register('login', { required: true })}
                    placeholder="Логин"
                    type="text"
                />
                {errors.login && <span>Это обязательное поле</span>}
                <input
                    {...register('pass', {
                        required: true,
                        minLength: 8,
                        maxLength: 24,
                    })}
                    placeholder="Пароль"
                    type="password"
                />
                {errors.pass && (
                    <span>Длина пароля должна быть более 8 символов</span>
                )}
                <input
                    {...register('repeatpass', {
                        required: true,
                        minLength: 8,
                        maxLength: 24,
                    })}
                    placeholder="Повторите пароль"
                    type="password"
                />
                {errors.repeatpass && (
                    <span>Длина пароля должна быть более 8 символов</span>
                )}
            </form>

            <ul className={cls.buttons}>
                <li>
                    <Link to="/signup/">
                        <Button name="Назад" />
                    </Link>
                </li>
                <li>
                    <Link to="/signup/step_2">
                        <Button name="Далее" type="submit" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default RegisterStep1Page;
