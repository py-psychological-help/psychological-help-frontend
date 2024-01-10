import React from 'react';
import styles from './AboutProject.module.scss';
import logoImage from '../../images/advLogo.png';

function AboutProject() {
	return (
		<section className={styles.aboutProject}>
			<div className={styles.infoBlock}>
				<h2 className={styles.aboutProjectHeader}>
					Текст про наши цели
				</h2>
			</div>
			<div className={styles.advantages}>
				<div className={styles.advBlock}>
					<div className={styles.advElement}>
						<img
							className={styles.advImage}
							src={logoImage}
							alt="Logo"
						/>
						<h3 className={styles.advTitle}>Преимущество 1</h3>
						<p className={styles.advText}>
							Text about text. Text about text. Text about text.
							Text about text.
						</p>
					</div>

					<div className={styles.advElement}>
						<img
							className={styles.advImage}
							src={logoImage}
							alt="Logo"
						/>
						<h3 className={styles.advTitle}>Преимущество 2</h3>
						<p className={styles.advText}>
							Text about text. Text about text. Text about text.
							Text about text.
						</p>
					</div>
					<div className={styles.advElement}>
						<img
							className={styles.advImage}
							src={logoImage}
							alt="Logo"
						/>
						<h3 className={styles.advTitle}>Преимущество 3</h3>
						<p className={styles.advText}>
							Text about text. Text about text. Text about text.
							Text about text.
						</p>
					</div>
					<div className={styles.advElement}>
						<img
							className={styles.advImage}
							src={logoImage}
							alt="Logo"
						/>
						<h3 className={styles.advTitle}>Преимущество 4</h3>
						<p className={styles.advText}>
							Text about text. Text about text. Text about text.
							Text about text.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutProject;
