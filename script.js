function getFormvalue() {
    //Write your code here
	const form = document.querySelector('#form1');
	
	const first = form.querySelector('input[name="fname"]').value;
	const last = form.querySelector('input[name="lname"]').value;

	alert(first + " " + last);

}
