import React from 'react';
import styles from './WaitingRoom.module.scss';

function WaitingRoom() {
	return (
		<section id="waitingRoom" className={styles.waitingRoom}>
			<div className={styles.headers}>
				<h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
					Мы поможем Вам!
				</h2>
				<p className={styles.mainText}>
					Ваша заявка принята в работу, в течении 24 часов наш
					психолог свяжется с вами в рабочее время для решения вашей
					проблемы.
				</p>
			</div>
			<div className={styles.featuresBlock}>
				<div className={styles.featuresElement}>
					<div
						className={`${styles.featuresIcon} ${styles.peopleIcon}`}
					/>
					<p className={styles.featuresText}>
						Мы свяжемся с вами в рабочее время, оставлять повторно
						заявку не нужно.
					</p>
				</div>

					<div className={styles.featuresElement}>
						<div className={`${styles.featuresIcon} ${styles.timeIcon}`}/>
						<p className={styles.featuresText}>
							Время работы: 10:00 - 22:00
							<br/>GMT+3 (Москва, Россия)
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WaitingRoom;
