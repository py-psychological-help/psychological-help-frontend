import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './DocumentsUploader.module.scss';
import api from './api';

function readBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}

function DocumentsUploader({ onSuccessfulUpload }) {
	const [docsToUpload, setDocsToUpload] = useState([]);
	const [checkboxChecked, setCheckboxChecked] = useState(false);

	const handleRemoveDoc = (index) => {
		setDocsToUpload((prevFiles) => {
			const newFiles = [...prevFiles];
			newFiles.splice(index, 1);
			return newFiles;
		});
	};

	const handleUpload = () => {
		if (!checkboxChecked) {
			return;
		}

		const uploadedDocs = [];
		for (let i = 0; i < docsToUpload.length; i += 1) {
			const doc = readBase64(docsToUpload[i]).then((d) =>
				api.uploadDocument(d)
			);
			uploadedDocs.push(doc);
		}

		Promise.all(uploadedDocs)
			.then(onSuccessfulUpload)
			.catch((e) => console.log(e));
	};

	const onDrop = useCallback((droppedFiles) => {
		setDocsToUpload((files) => [...files, ...droppedFiles]);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	return (
		<div>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				<div
					className={`${style.loading} ${
						isDragActive ? style.dragActive : ''
					}`}
				>
					<p className={style.info}>
						Перетащите файлы сюда или нажмите, чтобы загрузить
					</p>
					<span className={style.span}>
						Максимальный размер загружаемого файла 5МБ
					</span>
					<button className={style.button}>Загрузить</button>
				</div>
			</div>
			{docsToUpload.length > 0 && (
				<div>
					<ul className={style.ul}>
						{docsToUpload.map((file, i) => (
							// eslint-disable-next-line react/no-array-index-key
							<div key={i} className={style.listElement}>
								<img
									className={style.photo}
									src="https://via.placeholder.com/80x80"
									alt="фото документа"
								/>
								<li className={style.listDocument}>
									{file.name}
								</li>
								<button
									className={style.deleteButton}
									onClick={() => handleRemoveDoc(i)}
								>
									<span />
								</button>
							</div>
						))}
					</ul>
				</div>
			)}
			{docsToUpload.length > 1 && (
				<div>
					<button
						className={style.verification}
						disabled={!checkboxChecked}
						onClick={handleUpload}
					>
						Отправить на верификацию
					</button>
					<div className={style.personalData}>
						<input
							className={style.checkbox}
							type="checkbox"
							id="personal"
							name="personal"
							checked={checkboxChecked}
							onChange={() =>
								setCheckboxChecked(!checkboxChecked)
							}
						/>
						<span>
							Я согласен на передачу персональных данных для
							прохождения процедуры верификации согласно правилам
							использования сервиса
						</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default DocumentsUploader;
