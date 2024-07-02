function isInViewport(elements) {
    const viewportHeight = window.innerHeight;
	
	for (let i = 0; i < elements.length; i++) {
		let element = elements[i];
		let elementTop = element.getBoundingClientRect();
		
		if (elementTop.top > 0 && elementTop.top < viewportHeight) {
				element.classList.add('reveal_active');
			} else if (elementTop.bottom > 0 && elementTop.bottom < viewportHeight) {
				element.classList.add('reveal_active');
			} else {
				element.classList.remove('reveal_active');
			}
		}
		
};

const revals = document.querySelectorAll('.reveal')
window.onscroll = function () {
    isInViewport(revals);
}
