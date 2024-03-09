import React, { memo } from 'react';
import styles from './MainSection.module.scss';

const MainSection = memo(() => {
	return (
		<section className={styles.mainSection}>
			<h1 className={styles.mainHeader}>Давай поговорим</h1>

			<div className={styles.textBlock}>
				<h2 className={styles.mainSubHeader}>
					Онлайн-сервис бесплатной психологической помощи
				</h2>
				<p className={styles.mainText}>
					Наша миссия помочь тебе раскрыть внутреннюю силу,
					справляться с трудностями и жить в гармонии с собой
				</p>
			</div>
		</section>
	);
});

export default MainSection;
