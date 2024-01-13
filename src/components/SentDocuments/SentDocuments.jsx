import React from 'react';
import style from './SentDocuments.module.scss';

const SentDocuments = () => {
	return (
		<div className={style.body}>
			<h3 className={style.header}>Подтверждение навыков</h3>
			<p className={style.p}>
				Благодарим за предоставленные документы. Мы хотели бы сообщить
				Вам, что ваш запрос на валидацию навыков успешно получен. После
				проверки документов на подлинность Вам будет отправлено
				уведомление на электронную почту, указанную при регистрации.
				Пожалуйста, ожидайте результат в течение 24 часов.
			</p>
			<p className={style.p}>
				Спасибо за ваше терпение и понимание.
				<br />
				Мы надеемся, что результаты валидации будут положительными.
			</p>
			<div>
				<h3 className={style.header}>Отправлены на верификацию</h3>
				<ul className={style.ul}>
					{/* {filesloaded.map((file, i) => ( */}
					{/* 	<div key={j} className={style.listElement}> */}
					{/* 		<img className={style.photo} src="https://via.placeholder.com/80x80" */}
					{/* 			 alt="фото документа"/> */}
					{/* 		<li className={style.listDocument}> {file.name} */}
					{/* 		</li> */}
					{/* 	</div> */}
					{/* ))} */}
				</ul>
			</div>
		</div>
	);
};

export default SentDocuments;
