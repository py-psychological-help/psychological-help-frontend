import React, { useState } from 'react';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import styles from './HowItWorksSection.module.scss';
import { submitHelpRequest } from '../../../slices/clientSlice/howItWorksAsyncActions';

const HowItWorksSection = () => {
  const [formData, setFormData] = useState({
    complaint: '',
    email: '',
    first_name: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await dispatch(submitHelpRequest(formData));
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error.message || 'Произошла ошибка при отправке заявки');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="howItWorksSection" className={styles.howItWorksSection}>
      <h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
        Как это работает
      </h2>

      <div className={styles.featuresBlock}>
        <div className={styles.featuresElement}>
          <h2 className={styles.mainSubHeader}>1</h2>
          <p className={styles.featuresText}>Оставляете заявку в форме</p>
        </div>

        <div className={styles.featuresElement}>
          <h2 className={styles.mainSubHeader}>2</h2>
          <p className={styles.featuresText}>Психолог обрабатывает ваш запрос</p>
        </div>

        <div className={styles.featuresElement}>
          <h2 className={styles.mainSubHeader}>3</h2>
          <p className={styles.featuresText}>
            Вы получаете консультацию с помощью нашего онлайн — чата
          </p>
        </div>
      </div>

      <div className={styles.helpFormBlock}>
        <h2 className={styles.mainSubHeader}>Обратиться за помощью</h2>
        <p className={styles.featuresText}>
          Вся информация, которую вы оставите на сайте или обсудите с психологом конфиденциальна.
        </p>

        {submitSuccess ? (
          <p className={styles.successMessage}>Заявка успешно отправлена!</p>
        ) : (
          <form className={styles.helpForm} onSubmit={handleSubmit}>
            <label htmlFor="email">
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                pattern={validator.isEmail(String(formData.email))}
                placeholder="example@mail.ru"
              />
            </label>

            <div className={styles.nameInputBlock}>
              <label htmlFor="first_name">
                <input
                  className={styles.input}
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  disabled={formData.disableName}
                  placeholder="Ваше имя"
                />
              </label>
            </div>

            <div className={styles.textInputBlock}>
              <label htmlFor="text">
                <textarea
                  className={styles.textInput}
                  id="complaint"
                  name="complaint"
                  value={formData.complaint}
                  onChange={handleChange}
                  required
                  rows="10"
                  placeholder="Опишите кратко вашу проблему для работы с психологом."
                />
              </label>
            </div>

            <button className={styles.mainBtn} type="submit" disabled={submitting}>
              {submitting ? 'Отправка...' : 'Отправить заявку'}
            </button>

            {submitError && <p className={styles.errorMessage}>{submitError}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection;
