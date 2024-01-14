import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AuthNavigation.module.scss';
import Button from '../buttonHeader/Button';

const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({behavior: 'smooth'});
	}
};

function AuthNavigation() {
	return (
		<nav className={styles.headerNav}>
			<NavLink to="/" className={styles.header__logo}/>
			<div className={styles.navLinks}>
				<NavLink to="/" onClick={() => scrollToSection('aboutSection')} className={styles.navLink}>
					О проекте
				</NavLink>
				<NavLink to="/" onClick={() => scrollToSection('howItWorksSection')} className={styles.navLink}>
					Как это работает
				</NavLink>
				<NavLink to="/signup" className={styles.navLink}>
					Психологам
				</NavLink>
			</div>
			<div className={styles.navAuthbar}>
				<Button
					additionalStyles={styles.mainBtn}
					buttonText="Обратиться за помощью"
					to="/"
					onClick={() => scrollToSection('howItWorksSection')}
				/>
			</div>
		</nav>
	);
}

export default AuthNavigation;
