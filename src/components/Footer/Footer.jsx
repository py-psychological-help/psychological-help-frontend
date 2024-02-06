import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';

const Footer = memo(() => {
	const isLoggedIn = useSelector((state) => state.user.userData);

	return (
		<section className={styles.footer}>
			<nav className={styles.footerNav}>
				<div className={styles.logoBar}>
					<Logo />
				</div>
				<div className={styles.navLinks}>
					<NavLink to="/#aboutSection" className={styles.navLink}>
						О проекте
					</NavLink>

					<NavLink
						to="/#howItWorksSection"
						className={styles.navLink}
					>
						Как это работает
					</NavLink>

					<NavLink
						to={isLoggedIn ? '/account' : '/welcome'}
						className={styles.navLink}
					>
						Психологам
					</NavLink>

					{!isLoggedIn && (
						<NavLink to="/#faqSection" className={styles.navLink}>
							Вопросы
						</NavLink>
					)}

					<NavLink
						to={isLoggedIn ? '/welcome' : '/signin'}
						className={styles.navLink}
					>
						Личный кабинет
					</NavLink>
				</div>
			</nav>
			<div className={styles.copyRightBlock}>
				<p className={styles.copyRight}>&copy; 2024 Давай поговорим</p>
			</div>
		</section>
	);
});

export default Footer;
