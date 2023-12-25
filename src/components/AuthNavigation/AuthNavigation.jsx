import React from "react";
import {NavLink} from "react-router-dom";
import styles from './AuthNavigation.module.scss';
import Button from '../buttonHeader/Button';

function AuthNavigation() {
    return (
        <nav className={styles.headerNav}>
            <NavLink to="/" className={styles.header__logo}/>
            <div className={styles.navLinks}>
                <NavLink to="/about" className={styles.navLink}>
                    О нас
                </NavLink>
                <NavLink to="/how-it-works" className={styles.navLink}>
                    Как это работает
                </NavLink>
                <NavLink to="/signup" className={styles.navLink}>
                    Работать с НАМИ
                </NavLink>
            </div>
            <div className={styles.navAuthbar}>
                <NavLink to="/account">
                    <Button
                        buttonText="Личный кабинет"
                        additionalStyles={styles.navBtn}
                    />
                </NavLink>
            </div>
        </nav>
    );
}

export default AuthNavigation;
