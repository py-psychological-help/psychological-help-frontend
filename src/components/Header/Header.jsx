import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { userActions } from '../../slices/userSlice/userSlice';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Button from '../buttonHeader/Button';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = memo(() => {
    const isLoggedIn = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNav = () => {
        navigate('/signin');
    };

    const handleLogout = () => {
        dispatch(userActions.logout());
        navigate('/');
    };

    return (
        <section className={styles.header}>
            <nav className={styles.headerNav}>
                <div className={styles.logoBar}>
                    <Logo />
                </div>
                <div className={styles.navLinks}>
                    <NavLink
                        to="/"
                        onClick={() => scrollToSection('aboutSection')}
                        className={styles.navLink}
                    >
                        О проекте
                    </NavLink>
                    <NavLink
                        to="/"
                        onClick={() => scrollToSection('howItWorksSection')}
                        className={styles.navLink}
                    >
                        Как это работает
                    </NavLink>

                    <NavLink
                        to={isLoggedIn ? '/account' : '/signup'}
                        className={styles.navLink}
                    >
                        Психологам
                    </NavLink>
                </div>

                <div className={styles.navAuthbar}>
                {isLoggedIn && location.pathname !== '/welcome' && (
    <Button
        additionalStyles={styles.logBtn}
        buttonText="Выйти"
        onClick={handleLogout}
    />
)}

{!isLoggedIn && location.pathname !== '/' && location.pathname !== '/welcome' && (
    <Button
        additionalStyles={styles.logBtn}
        buttonText="Войти"
        onClick={handleNav}
    />
)}

{!isLoggedIn && location.pathname === '/' && location.pathname !== '/welcome' && (
    <Button
        additionalStyles={styles.mainBtn}
        buttonText="Обратиться за помощью"
        onClick={() => scrollToSection('howItWorksSection')}
    />
)}

                </div>
            </nav>
        </section>
    );
});

export default Header;
