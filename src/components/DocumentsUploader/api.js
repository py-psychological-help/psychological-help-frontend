import { BASE_URL } from '../../utils/const';

function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}
	return res.json().then((body) => {
		return Promise.reject(new Error(body.message));
	});
}

class Api {
	constructor({ baseUrl, getAuthToken }) {
		this.baseUrl = baseUrl;
		this.getAuthToken = getAuthToken;
	}

	getHeaders() {
		const authToken = this.getAuthToken();
		return {
			'Content-Type': 'application/json',
			Authorization: `Token ${authToken}`,
		};
	}

	getUploadedDocuments() {
		return fetch(`${this.baseUrl}users/psychologists/me/documents/`, {
			method: 'GET',
			headers: this.getHeaders(),
		}).then(checkResponse);
	}

	uploadDocument(doc) {
		return fetch(`${this.baseUrl}users/psychologists/me/documents/`, {
			method: 'POST',
			headers: this.getHeaders(),
			body: JSON.stringify({ scan: doc }),
		}).then(checkResponse);
	}
}

const api = new Api({
	baseUrl: BASE_URL,
	getAuthToken: () => localStorage.getItem('authToken'),
});

export default api;
