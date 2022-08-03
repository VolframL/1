const forms = document.querySelectorAll('form');

forms.forEach(item => {
	postData(item);
});

function postData(form) {
	form.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(form);

			const object = {};
			formData.forEach(function(value, key){
					object[key] = value;
			});

			fetch('mailer/smart.php', {
				method: 'POST',
				headers: {
						'Content-Type': 'application/json'
				},
				body: JSON.stringify(object)
		}).then(data => {
				console.log(data);
				// showThanksModal(message.success);
				// statusMessage.remove();
		}).catch(() => {
				// showThanksModal(message.failure);
		}).finally(() => {
				form.reset();
		});
});
};