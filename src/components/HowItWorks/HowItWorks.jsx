import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HowItWorks.module.scss';
import Button from '../buttonHeader/Button';

function HowItWorks() {
	return (
		<section className={styles.howItWorks}>
			<div className={styles.infoBlock}>
				<h2 className={styles.howItWorksHeader}>How it works?</h2>
				<p className={styles.howItWorksText}>It works like this</p>
			</div>

			<div className={styles.stepsBlock}>
				<div className={styles.leftStep}>
					<h2 className={styles.stepHeader}>Step 1</h2>
					<p className={styles.stepText}>I'm sorry</p>
				</div>

				<div className={styles.rightStep}>
					<h2 className={styles.stepHeader}>Step 2</h2>
					<p className={styles.stepText}>Sorry for what?</p>
				</div>
				<NavLink to="/profile">
					<Button
						additionalStyles={styles.stepsBtn}
						buttonText="Help me!"
					/>
				</NavLink>
			</div>
		</section>
	);
}

export default HowItWorks;
