// Sends contact / quote form submissions to WhatsApp instead of a server endpoint.
(function () {
	'use strict';

	var WHATSAPP_NUMBER = '919891137368';
	var FIELD_LABELS = [
		['username', 'Name'],
		['phone', 'Phone'],
		['email', 'Email'],
		['subject', 'Subject'],
		['message', 'Message']
	];

	function isEnquiryForm(form) {
		return form.id === 'contact-form' || !!form.querySelector('button[name="submit-form"]');
	}

	function buildMessage(form) {
		var lines = ['Hello Huda Conveyors Solution, I have an enquiry from your website.', ''];
		FIELD_LABELS.forEach(function (pair) {
			var field = form.elements[pair[0]];
			var value = field && field.value ? field.value.trim() : '';
			if (value) {
				lines.push(pair[1] + ': ' + value);
			}
		});
		lines.push('', 'Page: ' + window.location.href);
		return lines.join('\n');
	}

	document.addEventListener('submit', function (event) {
		var form = event.target;
		if (!form || form.tagName !== 'FORM' || !isEnquiryForm(form)) {
			return;
		}

		event.preventDefault();
		event.stopImmediatePropagation();

		var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(buildMessage(form));
		var opened = window.open(url, '_blank', 'noopener');
		if (!opened) {
			window.location.href = url;
		}
		form.reset();
	}, true);
})();
