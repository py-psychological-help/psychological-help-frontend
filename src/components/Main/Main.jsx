import React from 'react';
import styles from './Main.module.scss';
import MainSection from "./MainSection/MainSection";
import AboutSection from "./AboutSection/AboutSection";
import WarningSection from "./WarningSection/WarningSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import WorkWithUsSection from "./WorkWithUsSection/WorkWithUsSection";
import FaqSection from "./FaqSection/FaqSection";


function Main() {
	return (
		<section className={styles.main}>
			<MainSection/>
			<AboutSection/>
			<WarningSection/>
			<HowItWorksSection/>
			<WorkWithUsSection/>
			<FaqSection/>
		</section>
	);
}

export default Main;
