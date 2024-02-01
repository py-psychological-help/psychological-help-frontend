import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import styles from './Main.module.scss';
import MainSection from "./MainSection/MainSection";
import AboutSection from "./AboutSection/AboutSection";
import WarningSection from "./WarningSection/WarningSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import WorkWithUsSection from "./WorkWithUsSection/WorkWithUsSection";
import FaqSection from "./FaqSection/FaqSection";


function Main() {

	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const targetElement = document.getElementById(location.hash.slice(1));
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);

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
