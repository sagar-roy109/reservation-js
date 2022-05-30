"use strict";

$(document).ready(() => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;


	// focus on pickup date box

	$('#pickup_date').focus();


	// error message

	let err_msg = 'This field is required';
	var err = false;
	// submit form event

	$('#submit').on('click', (e) => {

		// get values
		let date = $('#pickup_date').val().trim();
		let days = +$('#days').val().trim();
		let name = $('#name').val().trim();
		let phone = $('#phone').val().trim();
		let email = $('#email').val().trim();




		//validation start

		if (!days || !email || !phone || !name || !date) {

			if (err === false) {
				if (!date) {

					e.preventDefault();

					// create elemenet
					const errEl = document.createElement('span');
					errEl.classList.add('err-msg');
					errEl.textContent = err_msg;

					//append child
					document.getElementById('pickup_date').insertAdjacentElement('afterend', errEl);

				}
				if (!days || !Number.isInteger(days)) {

					e.preventDefault();

					// create elemenet
					const errEl = document.createElement('span');
					errEl.classList.add('err-msg');
					errEl.textContent = 'Please enter numaric number';

					//append child
					document.getElementById('days').insertAdjacentElement('afterend', errEl);

				}
				if (!name) {

					e.preventDefault();
					// create elemenet
					const errEl = document.createElement('span');
					errEl.classList.add('err-msg');
					errEl.textContent = err_msg;

					//append child
					document.getElementById('name').insertAdjacentElement('afterend', errEl);



				}
				if (!phone) {

					e.preventDefault();
					// create elemenet
					const errEl = document.createElement('span');
					errEl.classList.add('err-msg');
					errEl.textContent = err_msg;

					//append child
					document.getElementById('phone').insertAdjacentElement('afterend', errEl);



				}
				if (!email) {

					e.preventDefault();
					// create elemenet
					const errEl = document.createElement('span');
					errEl.classList.add('err-msg');
					errEl.textContent = 'Please enter valid email';

					//append child
					document.getElementById('email').insertAdjacentElement('afterend', errEl);

				} else if (!document.getElementById('email').value.match(emailPattern)) {

					// create elemenet
					const errEl = document.createElement('span');
					errEl.classList.add('err-msg');
					errEl.textContent = 'Please enter valid email';

					//append child
					document.getElementById('email').insertAdjacentElement('afterend', errEl);



				}

			}

			e.preventDefault();
		}

		// email validation



		return err = true;


	});



}); // end ready
