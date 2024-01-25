import React from 'react';
import style from './SentDocuments.module.scss';

const SentDocuments = ({ documents }) => {
	function extractDocName(url) {
		const lastSlashIndex = url.lastIndexOf('/');
		return url.slice(lastSlashIndex + 1);
	}

	return (
		<div className={style.body}>
			<h3 className={style.header}>Подтверждение навыков</h3>
			<p className={style.p}>
				Благодарим за предоставленные документы. Мы хотели бы сообщить
				Вам, что ваш запрос на валидацию навыков успешно получен. После
				проверки документов на подлинность Вам будет отправлено
				уведомление на электронную почту, указанную при регистрации.
				Пожалуйста, ожидайте результат в течение 24 часов. В случае
				воззникновения вопросов, просим их направить на нашу электронную
				почту account@dpogovorim.ru.
			</p>
			<p className={style.p}>
				Спасибо за ваше терпение и понимание.
				<br />
				Мы надеемся, что результаты валидации будут положительными.
			</p>
			<div>
				<h3 className={style.header}>Отправлены на верификацию</h3>
				<ul className={style.ul}>
					{documents.map((doc) => (
						<div className={style.listElement}>
							<img
								className={style.photo}
								src={doc.scan}
								alt="фото документа"
							/>
							<li className={style.listDocument}>
								{extractDocName(doc.scan)}
							</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SentDocuments;
