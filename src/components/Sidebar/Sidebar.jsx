import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import styles from './Sidebar.module.scss';
import userIcon from '../../images/User_01.svg';
import chatIcon from '../../images/Chat_Circle_Dots.svg';
import fileIcon from '../../images/Files.svg';

const Sidebar = () => {
	const location = useLocation();
	return (
		<div className={styles.sidebar}>
			<div className={styles.box}>
				<ul className={styles.links}>
					<li className={styles.list}>
						<NavLink to="/account"
								 className={`${styles.link} ${((location.pathname === '/account') || (location.pathname === '/account/documents')) ? styles.active : ''}`}>
							<img src={userIcon} alt="значок"/>
							Профиль
						</NavLink>
					</li>
					<li className={styles.list}>
						<NavLink to="/account-chat"
								 className={`${styles.link} ${location.pathname === '/account-chat' ? styles.active : ''}`}>
							<img src={chatIcon} alt="значок"/>
							Чаты
						</NavLink>
					</li>
					<li className={styles.list}>
						<NavLink to="/account-principles"
								 className={`${styles.link} ${location.pathname === '/account-principles' ? styles.active : ''}`}>
							<img src={fileIcon} alt="значок"/>
							Памятка
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
		;
};

export default Sidebar;
