
const bookElement = document.getElementById("book");
const controlElements = document.querySelector(".book__control");

controlElements.addEventListener("click", function (event) {
	
	event.preventDefault();
	activeElement = event.target;
	parentElement = activeElement.parentElement;
	activeList = parentElement.querySelectorAll("a");
	
	activeList.forEach((element, ) => {
		 element.classList.remove(element.classList[0] + "_active");
		 });
	activeElement.classList.add(activeElement.classList[0] + '_active');
	
	function removeClassName(className) {
		for (element of bookElement.classList) {
			if (element.includes(className)) {
				bookElement.classList.remove(element);
				}
			}
		}	
	
	if (parentElement.classList.contains('book__control_font-size')) {
		removeClassName('book_fs-')
		if (activeElement.dataset.size !== undefined) {
			bookElement.classList.add('book_fs-' + activeElement.dataset.size);
			}
		}

	if (parentElement.classList.contains('book__control_color')) {
		removeClassName('book_color-')
		bookElement.classList.add('book_color-' + activeElement.dataset.textColor);
		}

	if (parentElement.classList.contains('book__control_background')) {
		removeClassName('book_bg-')
		bookElement.classList.add('book_bg-' + activeElement.dataset.bgColor);
		}
	}
);
