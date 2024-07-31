const signIn = document.getElementById('signin');
const formName = document.getElementById('signin__form');
const submitBtn = document.getElementById('signin__btn');

const intervalId = setInterval(function() {
  localStorage.removeItem('user_id');
}, 5000)

signIn.classList.add('signin_active');
if (localStorage.getItem('user_id')) {
    document.getElementById('user_id').textContent = localStorage.user_id;
    document.getElementById('welcome').classList.add('welcome_active');
	signIn.classList.remove('signin_active');
}

submitBtn.addEventListener('click', () => {
	event.preventDefault();
	const formData = new FormData(formName);
	const request = new XMLHttpRequest();
	request.responseType = 'json';
	request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	request.addEventListener('load', function() {
        if (this.status >= 200 && this.status < 300) {
            const data = this.response; 
			if (data.success === true) {    
				localStorage.setItem('user_id', data.user_id);
				document.getElementById('user_id').textContent = data.user_id;
				signIn.classList.remove('signin_active');
				document.getElementById('welcome').classList.add('welcome_active');
			} 
			else {
				alert('Неверный логин/пароль');
			}
        };
	});
	request.send(formData);
	formName.reset();
});
