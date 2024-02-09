import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { userActions } from '../../slices/userSlice/userSlice';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Button from '../buttonHeader/Button';
import { authActions } from '../../slices/authSlice/authSlice';

const Header = memo(() => {
	const isLoggedIn = useSelector((state) => state.user.userData);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const handleNav = () => {
		if (location.pathname !== '/signin') {
			navigate('/signin');
		} else {
			window.location.reload();
		}
	};

	const handleLogout = () => {
		dispatch(userActions.logout());
		dispatch(authActions.logout());
		navigate('/');
	};

	return (
		<section id="headerSection" className={styles.header}>
			<nav className={styles.headerNav}>
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
				</div>

				<div className={styles.navAuthbar}>
					{isLoggedIn && location.pathname !== '/welcome' && (
						<Button
							additionalStyles={styles.logBtn}
							buttonText="Выйти"
							onClick={handleLogout}
						/>
					)}

					{!isLoggedIn &&
						location.pathname !== '/' &&
						(location.pathname === '/welcome' ||
							location.pathname === '/signin' ||
							location.pathname === '/forgotpassword' ||
							location.pathname === '/signup') && (
							<Button
								additionalStyles={styles.logBtn}
								buttonText="Войти"
								onClick={handleNav}
							/>
						)}

					{!isLoggedIn &&
						location.pathname === '/' &&
						location.pathname !== '/welcome' && (
							<Button
								additionalStyles={styles.mainBtn}
								buttonText="Обратиться за помощью"
								onClick={() => navigate('/#howItWorksSection')}
							/>
						)}
				</div>
			</nav>
		</section>
	);
});

export default Header;
