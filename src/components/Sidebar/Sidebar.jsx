import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.box}>
                <div className={styles.userInfo}>
                    <p>ФИО пользователя</p>
                </div>
                <ul className={styles.links}>
                    <li>
                        <NavLink to="/account"
                                 className={`${styles.link} ${activeButton === 'account' && styles.active}`}
                                 onClick={() => handleButtonClick('account')}>
                            Данные
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account/chat"
                                 className={`${styles.link} ${activeButton === 'chat' && styles.active}`}
                                 onClick={() => handleButtonClick('chat')}>
                            Чаты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account/principles"
                                 className={`${styles.link} ${activeButton === 'principles' && styles.active}`}
                                 onClick={() => handleButtonClick('principles')}>
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
