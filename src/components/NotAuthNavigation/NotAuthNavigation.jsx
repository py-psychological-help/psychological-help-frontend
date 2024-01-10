import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotAuthNavigation.module.scss';
import Button from '../buttonHeader/Button';

function NotAuthNavigation() {
	return (
		<nav className="header__nav">
			<NavLink to="/" className={styles.header__logo} />
			<div className="header__nav-links">
				<NavLink to="/about" className={styles.navLink}>
					О нас
				</NavLink>
				<NavLink to="/how-it-works" className={styles.navLink}>
					Как это работает
				</NavLink>
				<NavLink to="/signup" className={styles.navLink}>
					Работать с нами
				</NavLink>
			</div>
			<div className="header__nav-authbar">
				<NavLink to="/signin">
					<Button buttonText="Войти" />
				</NavLink>
			</div>
		</nav>
	);
}

export default NotAuthNavigation;
