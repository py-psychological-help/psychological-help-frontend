import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './AuthNavigation.module.scss';
import Button from '../buttonHeader/Button';
import { userActions } from '../../slices/userSlice/userSlice';

const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

const AuthNavigation = memo(() => {
	const isLoggedIn = useSelector((state) => state.user.userData);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(userActions.logout());
		navigate('/');
	};

	return (
		<nav className={styles.headerNav}>
			<NavLink to="/" className={styles.header__logo} />
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
				{/* Был Button, не работали функции на онклике */}
				<button
					onClick={handleLogout}
					className={styles.logoutBtn}
					// buttonText="Выйти"
				>
					Выйти
				</button>
			</div>
		</nav>
	);
});

export default AuthNavigation;
