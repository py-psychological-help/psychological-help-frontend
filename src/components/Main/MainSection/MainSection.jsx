import React from "react";
import styles from './MainSection.module.scss';
import Button from '../../buttonHeader/Button';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

function MainSection() {
    return (
        <section className={styles.mainSection}>
            <h1 className={styles.mainHeader}>Давай поговорим</h1>
            <h2 className={styles.mainSubHeader}>
                Онлайн-сервис бесплатной психологической помощи
            </h2>
            <p className={styles.mainText}>
                Наша миссия помочь людям раскрыть их внутреннюю силу, чтобы справиться с трудностями и жить в гармонии с собой
            </p>
            <Button
                additionalStyles={styles.mainBtn}
                buttonText="Обратиться за помощью"
                onClick={() => scrollToSection('howItWorksSection')}
            />
        </section>
    );
}

export default MainSection;
