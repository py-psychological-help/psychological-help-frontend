import React, {useEffect, useState} from 'react';
import style from './Documents.module.scss';
import AccountMenu from '../AccountMenu/AccountMenu';
import DocumentsUploader from '../DocumentsUploader/DocumentsUploader';
import SentDocuments from '../SentDocuments/SentDocuments';
import api from "../DocumentsUploader/api";

const Documents = () => {
	const [sentDocuments, setSentDocuments] = useState([]);

	const handleSuccessfulUpload = (docs) => {
		setSentDocuments(docs)
	};

	useEffect(() => {
		api.getUploadedDocuments().then(setSentDocuments)
	}, [])

	return (
		<div>
			<AccountMenu/>
			{sentDocuments.length > 0
				? <SentDocuments documents={sentDocuments}/>
				: (
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
						<DocumentsUploader onSuccessfulUpload={handleSuccessfulUpload}/>
					</div>
				)
			}
		</div>
	);
};

export default Documents;
