function checkResponse(res) {
	if (res.ok) {
		return res.json();
	}
	return res.json()
		.then((body) => {
			return Promise.reject(new Error(body.message))
		})
}

class Api {
	constructor({baseUrl, commonHeaders}) {
		this.baseUrl = baseUrl;
		this.commonHeaders = commonHeaders;
	}

	getUploadedDocuments() {
		return fetch(`${this.baseUrl}/users/psychologists/me/education/`, {
			method: "GET",
			headers: this.commonHeaders,
		})
			.then(checkResponse)
	}

	uploadDocument(doc) {
		return fetch(`${this.baseUrl}/users/psychologists/me/education/`, {
			method: "POST",
			headers: this.commonHeaders,
			body:JSON.stringify({scan: doc})
		})
			.then(checkResponse)
	}
}

const api = new Api({
	baseUrl: 'https://letstalk.ddns.net/api/v1',
	commonHeaders: {
		'Content-Type': 'application/json',
	}
});

export default api
