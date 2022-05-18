"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;


	// focus on pickup date box

	$('#pickup_date').focus();




	// submit form event

	$('#submit').on('click', (e) => {

		// get values
		let date = $('#pickup_date').val().trim();
		let days = $('#days').val().trim();
		let name = $('#name').val().trim();
		let phone = $('#phone').val().trim();
		let email = $('#email').val().trim();

		//validation start

		if(!date){
			e.preventDefault();
			$('#pickup_date').siblings('<h2>test</h2>');
			console.log('test');
		}





	});



}); // end ready
