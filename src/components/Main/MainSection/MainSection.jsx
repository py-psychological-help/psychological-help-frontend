import React from "react";
import styles from './MainSection.module.scss';

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
        </section>

        
    );
}

export default MainSection;
