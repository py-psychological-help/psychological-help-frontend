import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cls from './RegisterStep3Page.module.scss';
import Button from '../../components/button/Button';

const RegisterStep3Page = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className={cls.step3}>
            <h1 className={cls.heading}>Подтверждение навыков</h1>
            <p className={cls.description}>Загрузка дипломов и сертификатов</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={cls.form}
                noValidate
            >
                <div className={cls.certificateContainer}>
                    <div className={cls.documents}>
                        Здесь могла бы быть ваша реклама
                    </div>
                    <div className={cls.inputBtn}>
                        + Добавить
                        <input
                            className={cls.input}
                            {...register('certificate', { required: true })}
                            type="file"
                            multiple
                            accept="image/*"
                        />
                    </div>
                </div>
            </form>

            <ul className={cls.buttons}>
                <li>
                    <Link to="/signup/step_2">
                        <Button name="Назад" />
                    </Link>
                </li>
                <li>
                    <Link to="/signup/">
                        <Button name="Отправить на верификацию" type="submit" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default RegisterStep3Page;
