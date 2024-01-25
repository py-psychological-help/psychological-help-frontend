import { useSelector } from 'react-redux';
import {useRef, useState} from "react";
import styles from './AccountInfo.module.scss';
import AccountMenu from '../AccountMenu/AccountMenu';

const AccountInfo = () => {
	const userData = useSelector((state) => state.user.userData);
	// Выдаёт ошибку, пока сервер не прислал юзера (поэтому знаки вопроса в данных).
	// В будущем добавить скелетон/лоадер, пока данные грузятся (state.user.isLoading)
	const [isEditing, setIsEditing] = useState(false);
	const [userFormData, setUserFormData] = useState({
		firstName:userData?.first_name,
		lastName:userData?.last_name,
		birthDate:userData?.birth_date
	})

	const nameInputRef = useRef();
	const lastNameInputRef = useRef();
	const birthDayInputRef = useRef();
	const accountFormRef = useRef();

	const enableEditing = (e) => {
		e.preventDefault()
		setIsEditing(true);
	};

	const cancelEditing = (e) => {
		e.preventDefault()
		setIsEditing(false);
	}

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setUserFormData({
			...userFormData,
			[name]: value,
		});
	};
	return (
		<div className={styles.body}>
			<AccountMenu />
			<div className={styles.formBox}>
				<form className={styles.form} ref={accountFormRef}>
					<label
						className={`${styles.label} ${styles.name}`}
						htmlFor="name">
						<span>Имя</span>
						<input
							className={styles.input}
							type="text"
							name="firstName"
							pattern="[a-zA-Zа-яА-Я\s\-]*"
							placeholder="Иван"
							minLength="1"
							maxLength="30"
							value={userFormData.firstName}
							onChange={handleInputChange}
							ref={nameInputRef}
							id="name"
							required
							readOnly={!isEditing}
						/>
					</label>
					<label className={styles.label} htmlFor="lastName">
						<span>Фамилия</span>
						<input
							className={styles.input}
							type="text"
							name="lastName"
							pattern="[a-zA-Zа-яА-Я\s\-]*"
							placeholder="Иванов"
							minLength="1"
							maxLength="30"
							value={userFormData.lastName}
							onChange={handleInputChange}
							ref={lastNameInputRef}
							id="lastName"
							required
							readOnly={!isEditing}
						/>
					</label>
					<label
						className={`${styles.label} ${styles.birthDate}`}
						htmlFor="birthDate">
						<span>Дата рождения</span>
						<input
							className={styles.input}
							type="date"
							name="birthDate"
							placeholder="12.12.1985"
							value={userFormData.birthDate} // Дата - null, проверить позже
							onChange={handleInputChange}
							id="birthDate"
							ref={birthDayInputRef}
							required
							readOnly={!isEditing}
						/>
					</label>
					<label
						className={`${styles.label} ${styles.email}`}
						htmlFor="email">
						<span>Почта</span>
						<input
							className={styles.input}
							type="email"
							name="email"
							pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
							placeholder="ivanov@gmail.com"
							value={userData?.email}
							id="email"
							readOnly
						/>
					</label>
					{isEditing
						? (<div className={styles.buttons}>
							<button className={styles.saveButton} type='submit'>Сохранить</button>
						<button className={styles.editButton} type='button' onClick={cancelEditing}>Отменить</button>
						</div>)
						: (<button className={styles.editButton} type='button'
								   onClick={enableEditing}>Редактировать</button>)}
				</form>
			</div>
		</div>
	);
};

export default AccountInfo;
