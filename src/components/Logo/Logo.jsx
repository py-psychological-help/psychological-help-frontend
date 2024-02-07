import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../../images/logoImage.svg';
import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={styles.logoContainer}>
			<NavLink to="/#headerSection">
				<img className={styles.logoImage} src={logoImage} alt="Logo" />
			</NavLink>
		</div>
	);
};

export default Logo;
