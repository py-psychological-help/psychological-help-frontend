import {NavLink, useLocation} from "react-router-dom";
import styles from './AccountMenu.module.scss';

const AccountMenu = () => {
	const location = useLocation();
	return (
		<div className={styles.formsBody}>
			<h1 className={styles.header}>Данные специалиста</h1>
			<ul className={styles.menu}>
				<li>
					<NavLink to="/account"
							 className={`${styles.menuButton} ${location.pathname === '/account' ? styles.menuButtonActive : ''}`}>Личные
						данные</NavLink>
				</li>
				<li>
					<NavLink to="/account/documents"
							 className={`${styles.menuButton} ${location.pathname === '/account/documents' ? styles.menuButtonActive : ''}`}>Документы</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default AccountMenu
