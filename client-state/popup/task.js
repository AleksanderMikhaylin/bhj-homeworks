const closeItem = document.getElementsByClassName('modal__close');
const windowShow = document.getElementById('subscribe-modal');

function closeWindow() {
	windowShow.className = 'modal';
	document.cookie = 'window=close';
};

window.onload = function() {
	let getCookie = (name) => {
        const value = '; ' + document.cookie;
        const parts = value.split('; ' + name + '=');
        if (parts.length !== 2) {
	    	windowShow.className = 'modal modal_active';
	    };
    }; 

getCookie('window');
}

closeItem[0].addEventListener('click', closeWindow);
