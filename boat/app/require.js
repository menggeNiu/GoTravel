let request = {};
// get请求
request.get = function(url) {
	return fetch(url)
		.then((response) => response.json())
};


// post请求
request.post = function(url, params) {
	return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
			// body: JSON.stringify({
			// 	firstParam: 'yourvalue',
			// 	secondParam: 'yourothervalue',
			// })

		})
		.then((response) => response.json())
}

module.exports = request;