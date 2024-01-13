import React, { useState } from 'react';
import style from './Documents.module.scss';
import AccountMenu from '../AccountMenu/AccountMenu';
import DropZone from '../DropZone/DropZone';
import SentDocuments from '../SentDocuments/SentDocuments';

const Documents = () => {
	const [showDocuments, setShowDocuments] = useState(true);

	const handleShowSentDocuments = () => {
		setShowDocuments(false); // При нажатии кнопки верификации скрываем Documents и показываем SentDocument
	};

	return (
		<div>
			<AccountMenu />
			{showDocuments && (
				<div className={style.body}>
					<p className={style.info}>
						Чтобы присоединиться к нашей экспертной команде
						психологов просим загрузить следующие документы в
						формате jpg/jpeg
					</p>
					<ul className={style.list}>
						<li>Паспорт</li>
						<li>
							Диплом о высшем образовании (Высшее психологическое
							образование — специалитет или магистратура)
						</li>
						<li>
							Свидетельство о профессиональной переподготовке (при
							наличии)
						</li>
						<li>
							Справка из профильного учебного заведения (для
							студентов 4-го курса)
						</li>
						<li>
							Сертификат о повышении квалификации (при наличии)
						</li>
						<li>Свидетельство о смене фамилии (при наличии)</li>
					</ul>
					<DropZone onVerification={handleShowSentDocuments} />
				</div>
			)}
			{!showDocuments && <SentDocuments />}
		</div>
	);
};

export default Documents;
