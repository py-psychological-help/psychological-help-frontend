import styles from './AccountInfo.module.scss';
import AccountMenu from "../AccountMenu/AccountMenu";

const AccountInfo = () => {
	return (
		<div className={styles.body}>
			<AccountMenu/>
			<div className={styles.formBox}>
				<form className={styles.form}>
					<label className={`${styles.label} ${styles.name}`} htmlFor='name'>
						<span>Имя</span>
						<input className={styles.input}
							   type="text"
							   name="name"
							   pattern="[a-zA-Zа-яА-Я\s\-]*"
							   placeholder="Иван"
							   minLength='1'
							   maxLength='30'
							   value=""
							   id='name'
							   readOnly/>
					</label>
					<label className={styles.label} htmlFor='secondName'>
						<span>Фамилия</span>
						<input className={styles.input}
							   type="text"
							   name="name"
							   pattern="[a-zA-Zа-яА-Я\s\-]*"
							   placeholder="Иванов"
							   minLength='1'
							   maxLength='30'
							   value=""
							   id='secondName'
							   readOnly/>
					</label>
					<label className={`${styles.label} ${styles.birthData}`} htmlFor='birthData'>
						<span>Дата рождения</span>
						<input className={styles.input}
							   type="text"
							   name="name"
							   placeholder="12.12.1985"
							   value=""
							   id='birthData'
							   readOnly/>
					</label>
					<label className={`${styles.label} ${styles.email}`} htmlFor='email'>
						<span>Почта</span>
						<input className={styles.input}
							   type="email"
							   name="email"
							   pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
							   placeholder="ivanov@gmail.com"
							   value=""
							   id='email'
							   readOnly/>
					</label>
				</form>
			</div>
		</div>
	)
}

export default AccountInfo
