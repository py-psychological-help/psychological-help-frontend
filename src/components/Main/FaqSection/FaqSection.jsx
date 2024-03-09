import React, { memo, useState } from 'react';
import styles from './FaqSection.module.scss';
import plus from '../../../images/plus.svg';

const FaqSection = memo(() => {
	const [expanded1, setExpanded1] = useState(false);
	const [expanded2, setExpanded2] = useState(false);
	const [expanded3, setExpanded3] = useState(false);
	const [expanded4, setExpanded4] = useState(false);
	const [expanded5, setExpanded5] = useState(false);

	const toggleExpanded1 = () => {
		setExpanded1(!expanded1);
	};

	const toggleExpanded2 = () => {
		setExpanded2(!expanded2);
	};

	const toggleExpanded3 = () => {
		setExpanded3(!expanded3);
	};

	const toggleExpanded4 = () => {
		setExpanded4(!expanded4);
	};

	const toggleExpanded5 = () => {
		setExpanded5(!expanded5);
	};

	const handleKeyPress = (event, toggleExpanded) => {
		if (event.key === 'Enter' || event.key === ' ') {
			toggleExpanded();
		}
	};

	return (
		<section id="faqSection" className={styles.faqSection}>
			<h2 className={styles.mainSubHeader}>Часто задаваемые вопросы</h2>

			<div className={styles.faqBlock}>
				<div className={styles.faqElement}>
					<div className={styles.faqQuestion}>
						<p className={styles.faqQuestionText}>
							Когда мне ответит психолог?
						</p>
						<div
							className={`${styles.toggle} ${
								expanded1 ? styles.expanded : ''
							}`}
							onClick={toggleExpanded1}
							onKeyPress={(event) =>
								handleKeyPress(event, toggleExpanded1)
							}
							role="button"
							tabIndex="0"
						>
							<img
								className={styles.plus}
								src={plus}
								alt="plus"
							/>
						</div>
					</div>
					<div
						className={`${styles.faqAnswer} ${
							expanded1 ? styles.expandedAnswer : ''
						}`}
					>
						<p className={styles.faqAnswerText}>
							Психолог отвечает в&nbsp;рабочее время с&nbsp;10:00
							до&nbsp;22:00 (мск), суббота
							и&nbsp;воскресенье&nbsp;&mdash; выходные. Обрати
							внимание, что иногда психолог отвечает
							не&nbsp;сразу, а&nbsp;с&nbsp;небольшой задержкой,
							несколько раз в&nbsp;день. Психолог обязательно
							ответит тебе в&nbsp;течение нескольких часов.
						</p>
					</div>
				</div>

				<div className={styles.faqElement}>
					<div className={styles.faqQuestion}>
						<p className={styles.faqQuestionText}>
							Как быть, если у&nbsp;меня несколько психологических
							проблем?
						</p>
						<div
							className={`${styles.toggle} ${
								expanded2 ? styles.expanded : ''
							}`}
							onClick={toggleExpanded2}
							onKeyPress={(event) =>
								handleKeyPress(event, toggleExpanded2)
							}
							role="button"
							tabIndex="0"
						>
							<img
								className={styles.plus}
								src={plus}
								alt="plus"
							/>
						</div>
					</div>
					<div
						className={`${styles.faqAnswer} ${
							expanded2 ? styles.expandedAnswer : ''
						}`}
					>
						<p className={styles.faqAnswerText}>
							Чаще всего так и&nbsp;бывает. Попробуй определить,
							какая из&nbsp;проблем волнует тебя больше всего.
							И&nbsp;именно её&nbsp;опиши наиболее подробно.
							По&nbsp;мере общения, появится возможность описать
							и&nbsp;остальные проблемы.
						</p>
					</div>

					<div className={styles.faqElement}>
						<div className={styles.faqQuestion}>
							<p className={styles.faqQuestionText}>
								Что делать, если психолог не&nbsp;отвечает ?
							</p>
							<div
								className={`${styles.toggle} ${
									expanded3 ? styles.expanded : ''
								}`}
								onClick={toggleExpanded3}
								onKeyPress={(event) =>
									handleKeyPress(event, toggleExpanded3)
								}
								role="button"
								tabIndex="0"
							>
								<img
									className={styles.plus}
									src={plus}
									alt="plus"
								/>
							</div>
						</div>
						<div
							className={`${styles.faqAnswer} ${
								expanded3 ? styles.expandedAnswer : ''
							}`}
						>
							<p className={styles.faqAnswerText}>
								Бывает так, что наши психологи не&nbsp;могут
								ответить сразу. Не&nbsp;расстраивайся, психолог
								обязательно ответит позже. Если ответ
								не&nbsp;пришёл в&nbsp;течении 24&nbsp;часов,
								отправь заявку повторно. А&nbsp;если у&nbsp;тебя
								срочный вопрос, можешь позвонить на&nbsp;любую
								горячую линию (смотри выше).
							</p>
						</div>
					</div>

					<div className={styles.faqElement}>
						<div className={styles.faqQuestion}>
							<p className={styles.faqQuestionText}>
								Стоит&nbsp;ли писать , если у&nbsp;меня нет
								особых проблем ?
							</p>
							<div
								className={`${styles.toggle} ${
									expanded4 ? styles.expanded : ''
								}`}
								onClick={toggleExpanded4}
								onKeyPress={(event) =>
									handleKeyPress(event, toggleExpanded4)
								}
								role="button"
								tabIndex="0"
							>
								<img
									className={styles.plus}
									src={plus}
									alt="plus"
								/>
							</div>
						</div>
						<div
							className={`${styles.faqAnswer} ${
								expanded4 ? styles.expandedAnswer : ''
							}`}
						>
							<p className={styles.faqAnswerText}>
								Конечно, стоит. К&nbsp;психологу обращаются
								не&nbsp;только с&nbsp;проблемами. Психолог может
								помочь, когда ты&nbsp;знаешь, чего хочешь,
								и&nbsp;тебе нужно узнать, как этого достичь.
								К&nbsp;психологу обращаются с&nbsp;целью
								самопознания или саморазвития, когда
								ты&nbsp;готов меняться и&nbsp;двигаться дальше.
								Психолог, подскажет как обрести гармонию
								и&nbsp;улучшить ментальное здоровье.
							</p>
						</div>
					</div>

					<div className={styles.faqElement}>
						<div className={styles.faqQuestion}>
							<p className={styles.faqQuestionText}>
								Кто имеет доступ к&nbsp;тому, что я&nbsp;пишу
								в&nbsp;заявке ?
							</p>
							<div
								className={`${styles.toggle} ${
									expanded5 ? styles.expanded : ''
								}`}
								onClick={toggleExpanded5}
								onKeyPress={(event) =>
									handleKeyPress(event, toggleExpanded5)
								}
								role="button"
								tabIndex="0"
							>
								<img
									className={styles.plus}
									src={plus}
									alt="plus"
								/>
							</div>
						</div>
						<div
							className={`${styles.faqAnswer} ${
								expanded5 ? styles.expandedAnswer : ''
							}`}
						>
							<p className={styles.faqAnswerText}>
								Все, что ты&nbsp;пишешь&nbsp;&mdash; анонимно
								и&nbsp;конфиденциально. Сообщения прочтёт
								психолог, который откликнется на&nbsp;заявку.
								Если ты&nbsp;не&nbsp;назовёшь себя,
								он&nbsp;не&nbsp;узнает, кто именно написал ему
								сообщение.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

export default FaqSection;
