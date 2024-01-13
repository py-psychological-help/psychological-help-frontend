import React from "react";
import {NavLink} from "react-router-dom";
import logoImage from '../../images/logoImage.png';
import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={styles.logoContainer}>
			<NavLink to="/">
				<img className={styles.logoImage} src={logoImage} alt="Logo"/>
			</NavLink>
		</div>
	);
};

export default Logo;
