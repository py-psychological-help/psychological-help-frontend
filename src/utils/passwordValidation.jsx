export default function passwordValidation(password) {
	const spaceRegExp = /(\s)/;
	const cyrrillicRegExp = /(?=.*?[А-ЯЁа-яё])/;
	const uppercaseRegExp = /(?=.*?[A-Z])/;
	const lowercaseRegExp = /(?=.*?[a-z])/;
	const digitsRegExp = /(?=.*?[0-9])/;
	const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

	const spacePassword = spaceRegExp.test(password);
	const cyrrillicPassword = cyrrillicRegExp.test(password);
	const uppercasePassword = uppercaseRegExp.test(password);
	const lowercasePassword = lowercaseRegExp.test(password);
	const digitsPassword = digitsRegExp.test(password);
	const specialCharPassword = specialCharRegExp.test(password);

	let errMsg = null;
	if (cyrrillicPassword) {
		errMsg = 'Только символы латиницы';
	} else if (spacePassword) {
		errMsg = 'Пароль не может содержать пробелы';
	} else if (!uppercasePassword) {
		errMsg = 'Пароль должен содержать заглавную букву';
	} else if (!lowercasePassword) {
		errMsg = 'Пароль должен содержать строчную букву';
	} else if (!digitsPassword) {
		errMsg = 'Пароль должен содержать цифру';
	} else if (!specialCharPassword) {
		errMsg = 'Пароль должен содержать специальный символ';
	} else {
		errMsg = null;
	}

	return errMsg;
}
