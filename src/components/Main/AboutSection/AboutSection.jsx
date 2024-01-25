import React from 'react';
import styles from './AboutSection.module.scss';
import Button from '../../buttonHeader/Button';

const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

function AboutSection() {
	return (
		<section id="aboutSection" className={styles.aboutSection}>
			<h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
				О проекте
			</h2>

			<p className={styles.mainText}>
				Анонимно и бесплатно помогаем тем, кто ищет поддержку в трудную
				минуту, через удобный онлайн чат
			</p>
			<div className={styles.featuresBlock}>
				<div className={styles.featuresElement}>
					<h3 className={styles.featuresHeader}>Анонимность</h3>
					<p className={styles.featuresText}>
						Полностью анонимное, безопасное пространство для
						открытого общения между психологом и нуждающимся в
						помощи.
					</p>
				</div>

				<div className={styles.featuresElement}>
					<h3 className={styles.featuresHeader}>Бесплатная помощь</h3>
					<p className={styles.featuresText}>
						Бесплатная консультация в чате с психологом доступная
						для всех, независимо от финансового положения.
					</p>
				</div>

				<div className={styles.featuresElement}>
					<h3 className={styles.featuresHeader}>
						Современная и безопасная платформа
					</h3>
					<p className={styles.featuresText}>
						Наша платформа обеспечивает безопасное и надежное
						общение между психологом и нуждающимся в помощи.
					</p>
				</div>

				<div className={styles.featuresElement}>
					<h3 className={styles.featuresHeader}>
						Многообразие специалистов
					</h3>
					<p className={styles.featuresText}>
						На платформе зарегистрированы психологи с подтвежденным
						образованием.
					</p>
				</div>
			</div>
			<Button
				additionalStyles={styles.mainBtn}
				buttonText="Обратиться за помощью"
				onClick={() => scrollToSection('howItWorksSection')}
			/>
		</section>
	);
}

export default AboutSection;
