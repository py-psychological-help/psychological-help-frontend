import React from 'react';
import styles from './WarningSection.module.scss';

function WarningSection() {
	return (
		<section className={styles.warningSection}>
			<h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
				Внимание!
				<br />
				Платформа не создана для экстренной помощи
			</h2>

			<p className={styles.mainText}>
				Если вы переживаете или испытываете острый эмоциональный кризис,
				позвоните на номер горячей линии или обратитесь в кризисный
				центр.
			</p>

			<div className={styles.featuresBlock}>
				<div className={styles.featuresElement}>
					<p className={styles.featuresText}>
						Горячая линия Центра экстренной психологической помощи
						МЧС России
					</p>
					<p className={styles.featuresText}>+7 (495) 989-50-50</p>
				</div>

				<div className={styles.featuresElement}>
					<p className={styles.featuresText}>
						Кризисная линия доверия по России
					</p>
					<p className={styles.featuresText}>+7 (800) 333-44-34</p>
				</div>

				<div className={styles.featuresElement}>
					<p className={styles.featuresText}>
						Горячая линия психологической помощи Московского
						института психоанализа
					</p>
					<p className={styles.featuresText}>+7 (800) 500-22-87</p>
				</div>
			</div>
		</section>
	);
}

export default WarningSection;
