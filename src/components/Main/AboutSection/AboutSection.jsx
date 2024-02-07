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

            <div className={styles.aboutBlock}>
                <div className={styles.aboutElement}>
                    <div className={styles.aboutText}>
                        <h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
                            О проекте
                        </h2>
                        <p className={styles.mainText}>
                            Оказываем психологическую поддержку через удобный онлайн-чат анонимно и&nbsp;бесплатно.
                        </p>
                    </div>
                    <Button
                        additionalStyles={styles.mainBtn}
                        buttonText="Обратиться за помощью"
                        onClick={() => scrollToSection('howItWorksSection')}
                    />
                </div>
            </div>

            <div className={styles.featuresBlock}>
                <div className={styles.featuresElement}>
                    <h3 className={styles.featuresHeader}>Анонимность</h3>
                    <p className={styles.featuresText}>
                        Анонимное, и&nbsp;безопасное пространство для общения с&nbsp;психологом.
                    </p>
                </div>

                <div className={styles.featuresElement}>
                    <h3 className={styles.featuresHeader}>Бесплатная помощь</h3>
                    <p className={styles.featuresText}>
                        Бесплатная консультация психолога в&nbsp;онлайн-чате.
                    </p>
                </div>

                <div className={styles.featuresElement}>
                    <h3 className={styles.featuresHeader}>
                        Современная и безопасная платформа
                    </h3>
                    <p className={styles.featuresText}>
                        Обеспечит комфортное общение между тобой и&nbsp;психологом.
                    </p>
                </div>
                <div className={styles.featuresElement}>
                    <h3 className={styles.featuresHeader}>Профессионализм</h3>
                    <p className={styles.featuresText}>
                        На&nbsp;платформе зарегистрированы психологи
                        с&nbsp;подтвежденным образованием.
                    </p>
                </div>
            </div>

        </section>
    );
}

export default AboutSection;
