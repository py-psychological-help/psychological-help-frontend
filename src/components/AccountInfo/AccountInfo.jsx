import React, {useState} from 'react';
import styles from './AccountInfo.module.scss';

const AccountInfo = () => {
    const [images, setImages] = useState([]);

    return (
        <div className={styles.formsBody}>
            <h1 className={styles.header}>Данные специалиста</h1>
            <div className={styles.formBox}>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor='secondName'>
                        <span>Фамилия</span>
                        <input className={styles.input}
                               type="text"
                               name="name"
                               pattern="[a-zA-Zа-яА-Я\s\-]*"
                               placeholder="Ваша фамилия"
                               minLength='1'
                               maxLength='30'
                               value=""
                               id='secondName'
                               readOnly/>
                    </label>
                    <label className={`${styles.label} ${styles.name}`} htmlFor='name'>
                        <span>Имя</span>
                        <input className={styles.input}
                               type="text"
                               name="name"
                               pattern="[a-zA-Zа-яА-Я\s\-]*"
                               placeholder="Ваше имя"
                               minLength='1'
                               maxLength='30'
                               value=""
                               id='name'
                               readOnly/>
                    </label>
                    <label className={`${styles.label} ${styles.email}`} htmlFor='email'>
                        <span>Почта</span>
                        <input className={styles.input}
                               type="email"
                               name="email"
                               pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
                               placeholder="Ваш E-mail"
                               value=""
                               id='email'
                               readOnly/>
                    </label>
                    <label className={`${styles.label} ${styles.birthData}`} htmlFor='birthData'>
                        <span>Дата рождения</span>
                        <input className={styles.input}
                               type="text"
                               name="name"
                               placeholder="01.01.1990"
                               value=""
                               id='birthData'
                               readOnly/>
                    </label>
                    <label className={`${styles.label} ${styles.login}`} htmlFor='login'>
                        <span className='login-form__field-name'>Логин</span>
                        <input className={styles.input}
                               type="text"
                               name="name"
                               pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
                               placeholder="login"
                               value=""
                               id='login'
                               readOnly/>
                    </label>
                    <div className={styles.imageBox}>
                        {images.map((image) => (
                            <img
                                key={image.id}
                                className={styles.img}
                                src={image.url}
                                alt={image.alt}
                            />
                        ))}
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AccountInfo
