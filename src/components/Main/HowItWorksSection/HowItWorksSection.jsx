import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styles from './HowItWorksSection.module.scss';
import { AskForHelpReq } from '../../../slices/clientSlice/helpReqAsyncActions';

const HowItWorksSection = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isError, isLoading, isSuccess } = useSelector(
		(state) => state.helpReq
	);

	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({ mode: 'onChange' });

	const askForHelp = (data) => {
		dispatch(AskForHelpReq(data));
		if (isSuccess) {
			navigate('/waiting-room');
		}
	};

	const onSubmit = (data) => {
		askForHelp(data);
	};

	return (
		<section id="howItWorksSection" className={styles.howItWorksSection}>
			<h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
				Как это работает
			</h2>

			<div className={styles.featuresBlock}>
				<div className={styles.featuresElement}>
					<div
						className={`${styles.featuresIcon} ${styles.iconNote}`}
					/>
					<p className={styles.featuresText}>
						Оставляешь заявку на&nbsp;сайте
					</p>
				</div>

				<div className={styles.featuresElement}>
					<div
						className={`${styles.featuresIcon} ${styles.iconSync}`}
					/>
					<p className={styles.featuresText}>
						Психолог обрабатывает заявку
					</p>
				</div>

				<div className={styles.featuresElement}>
					<div
						className={`${styles.featuresIcon} ${styles.iconMessage}`}
					/>
					<p className={styles.featuresText}>
						Консультация в нашем онлайн-чате
					</p>
				</div>
			</div>

			<div className={styles.helpFormBlock}>
				<h2 className={styles.mainSubHeader}>Оставить заявку</h2>
				<p className={styles.helpFormText}>
					Вся информация, которую ты&nbsp;оставишь на&nbsp;сайте или
					обсудишь с&nbsp;психологом, конфиденциальна.
				</p>

				<form
					className={styles.helpForm}
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<label className={styles.label} htmlFor="email">
						<p className={styles.inputCaption}>Почта</p>
						<input
							className={`${styles.input} ${
								errors.email && styles.inputWrong
							}`}
							type="email"
							name="email"
							id="email"
							{...register('email', {
								required: true,
								minLength: 6,
								maxLength: 50,
								pattern:
									/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
							})}
						/>
						{errors?.email?.type === 'pattern' && (
							<p className={styles.error}>
								Не соответствует формату почты
							</p>
						)}
						{errors?.email?.type === 'required' && (
							<p className={styles.error}>
								Пожалуйста, заполните поле
							</p>
						)}
						{errors?.email?.type === 'minLength' && (
							<p className={styles.error}>
								Слишком мало символов
							</p>
						)}
						{errors?.email?.type === 'maxLength' && (
							<p className={styles.error}>
								Слишком много символов
							</p>
						)}
					</label>

					<label className={styles.label} htmlFor="first_name">
						<p className={styles.inputCaption}>
							Имя (Можно не указывать)
						</p>
						<input
							className={`${styles.input} ${
								errors.first_name && styles.inputWrong
							}`}
							name="first_name"
							id="first_name"
							type="text"
							{...register('first_name', {
								maxLength: 50,
							})}
						/>
						{errors?.first_name?.type === 'maxLength' && (
							<p className={styles.error}>
								Слишком много символов
							</p>
						)}
					</label>

					<label className={styles.label} htmlFor="complaint">
						<p className={styles.inputCaption}>Проблема</p>
						<textarea
							className={`${styles.textInput} ${
								errors.complaint && styles.inputWrong
							}`}
							id="complaint"
							name="complaint"
							rows="10"
							{...register('complaint', {
								required: true,
								minLength: 2,
								maxLength: 500,
							})}
						/>
						{errors?.complaint?.type === 'required' && (
							<p className={styles.error}>
								Пожалуйста, заполните поле
							</p>
						)}
						{errors?.complaint?.type === 'minLength' && (
							<p className={styles.error}>
								Слишком мало символов
							</p>
						)}
						{errors?.complaint?.type === 'maxLength' && (
							<p className={styles.error}>
								Слишком много символов
							</p>
						)}
					</label>

					<button
						className={styles.mainBtn}
						type="submit"
						disabled={!isValid}
					>
						{isLoading ? 'Отправка...' : 'Отправить заявку'}
					</button>

					{isError && (
						<p className={styles.errorMessage}>Ошибка отправки</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default HowItWorksSection;
