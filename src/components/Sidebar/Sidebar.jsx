import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className={styles.sidebar}>
            <div className={styles.box}>
                <div className={styles.userInfo}>
                    <p>ФИО пользователя</p>
                </div>
                <ul className={styles.links}>
                    <li>
                        <NavLink to="/account"
                                 className={`${styles.link} ${location.pathname === '/account' ? styles.active : ''}`}>
                            Данные
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account-chat"
                                 className={`${styles.link} ${location.pathname === '/account-chat' ? styles.active : ''}`}>
                            Чаты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account-principles"
                                 className={`${styles.link} ${location.pathname === '/account-principles' ? styles.active : ''}`}>
                            Памятка
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.logout}>
                <button type="button" className={styles.logoutButton}>Выйти</button>
            </div>
        </div>
    )
        ;
};

export default Sidebar;
