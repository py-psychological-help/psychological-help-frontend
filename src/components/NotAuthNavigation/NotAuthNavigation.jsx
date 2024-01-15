import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './NotAuthNavigation.module.scss';
import Button from '../buttonHeader/Button';

const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

function AuthNavigation() {
	const navigate = useNavigate();
	const location = useLocation();
	const welcomePath = location.pathname === '/';

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
				<NavLink to="/welcome" className={styles.navLink}>
					Психологам
				</NavLink>
			</div>
			<div className={styles.navAuthbar}>
				{welcomePath ? (
					<Button
						additionalStyles={styles.mainBtn}
						buttonText="Обратиться за помощью"
						to="/"
						onClick={() => scrollToSection('howItWorksSection')}
					/>
				) : (
					<button
						onClick={() => navigate('/signin')}
						className={styles.loginBtn}
						// buttonText="Выйти"
					>
						Войти
					</button>
				)}
			</div>
		</nav>
	);
}

export default AuthNavigation;
