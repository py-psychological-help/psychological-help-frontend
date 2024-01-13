import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './DropZone.module.scss';

function DropZone({ onVerification }) {
	const [filesToUpload, setFilesTiUpload] = useState([]);
	const [checkboxChecked, setCheckboxChecked] = useState(false);

	const handleRemoveFile = (index) => {
		setFilesTiUpload((prevFiles) => {
			const newFiles = [...prevFiles];
			newFiles.splice(index, 1);
			return newFiles;
		});
	};
	const handleVerification = () => {
		if (checkboxChecked && onVerification) {
			onVerification();
		}
	};

	const onDrop = useCallback((droppedFiles) => {
		setFilesTiUpload((files) => [...files, ...droppedFiles]);
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
			{filesToUpload.length > 0 && (
				<div>
					<ul className={style.ul}>
						{filesToUpload.map((file, i) => (
							// eslint-disable-next-line react/no-array-index-key
							<div key={i} className={style.listElement}>
								<img
									className={style.photo}
									src="https://via.placeholder.com/80x80"
									alt="фото документа"
								/>
								<li className={style.listDocument}>
									{' '}
									{file.name}
								</li>
								<button
									className={style.deleteButton}
									onClick={() => handleRemoveFile(i)}
								>
									<span />
								</button>
							</div>
						))}
					</ul>
				</div>
			)}
			{filesToUpload.length > 1 && (
				<div>
					<button
						className={style.verification}
						formMethod="POST"
						disabled={!checkboxChecked}
						onClick={handleVerification}
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

export default DropZone;
