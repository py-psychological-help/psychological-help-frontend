import React from 'react';
import {Link} from 'react-router-dom';
import cls from './VerificationPage.module.scss';

export default function HowItWorksPage() {
    function handleUploadSubmit() {
        console.log('загружено фото');
    }

    // для тестирования состояний страницы
    const isSent = false;
    const isError = false;

    return isSent ? (
        <>
            <h1 className={cls.header}>
                {isError ? 'Подтверждение навыков' : 'Подтверждение навыков'}
            </h1>
            <p className={cls.caption}>
                {isError
                    ? 'Ошибка отправки данных '
                    : 'ждите 24 часа, итог верификации придет на почту'}
            </p>

            <Link className={cls.linkToMain} to="/">
                На главную
            </Link>
        </>
    ) : (
        <div>
            <h1 className={cls.header}>Подтверждение навыков</h1>
            <p className={cls.caption}>
                Загрузка дипломов и сертификатов(формат, загрузки фото (jpg))
            </p>
            <div className={cls.documentList}>
                <div className={cls.documentCard}>
                    <img
                        alt="fileName"
                        src="https://i1.sndcdn.com/avatars-000349784990-sl1e1v-t500x500.jpg"
                        className={cls.image}
                    />
                    <form name="uploadForm">
                        <input
                            className={cls.file}
                            type="file"
                            onChange={handleUploadSubmit}
                        />
                    </form>
                </div>

                <img
                    alt="fileName"
                    src="https://i1.sndcdn.com/avatars-000349784990-sl1e1v-t500x500.jpg"
                    className={cls.image}
                />
                <img
                    alt="fileName"
                    src="https://i1.sndcdn.com/avatars-000349784990-sl1e1v-t500x500.jpg"
                    className={cls.image}
                />
            </div>
            <form name="sendForm" className={cls.sendForm}>
                <div className={cls.checkboxWrap}>
                    <label htmlFor="personalData" className={cls.label}>
                        <input
                            type="checkbox"
                            id="personalData"
                            name="personalData"
                            value="personalData"
                        />
                        подтверждение о передаче перс. данных
                    </label>
                </div>
                <button type="button" className={cls.backBtn}>
                    Назад
                </button>
                <button type="submit" className={cls.submitBtn}>
                    Отправить на верификацию
                </button>
            </form>
        </div>
    );
}
