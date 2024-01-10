import React from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';

const Header = ({ isLoggedIn }) => {
	//   const location = useLocation();

	return (
		<header className={styles.header}>
			<Logo />
			<Navigation isLoggedIn={isLoggedIn} />
		</header>
	);
};

Header.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
