let activeIndex = 0;
const rotator__cases = document.querySelectorAll('.rotator__case');

const intervalId = setInterval(function() {
	
	rotator__cases[activeIndex].classList.remove('rotator__case_active');
	if (rotator__cases.length == activeIndex + 1) {activeIndex = -1};
	activeIndex++;
	rotator__cases[activeIndex].classList.add('rotator__case_active');
	
	}, 1000)
