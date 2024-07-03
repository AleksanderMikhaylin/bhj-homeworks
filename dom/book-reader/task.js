const bookElement = document.getElementById("book");
const controlElements = document.querySelector(".book__controls");

let carrentClassName = 'book';
let carrentData = {
	'book__control_font-size': {'key': undefined, 'dataset': 'size', 'className': 'book_fs-'},
	'book__control_color': {'key': undefined, 'dataset': 'textColor', 'className': 'book_color-'},
	'book__control_background': {'key': undefined, 'dataset': 'bgColor', 'className': 'book_bg-'},
	}

function getCarrentClassName(event) {
	
	let carrentLocalClassName = 'book';
	
	activeElement = event.target;
	parentElement = activeElement.parentElement;
	
	carrentData[parentElement.classList[1]]['key'] = activeElement.dataset[carrentData[parentElement.classList[1]]['dataset']];
	
	for (const key in carrentData) {
		if (carrentData[key]['key'] !== undefined) {
			carrentLocalClassName = carrentLocalClassName + ' ' + carrentData[key]['className'] + carrentData[key]['key'];
		}
	}
	
	return carrentLocalClassName;	
}
	
controlElements.addEventListener("click", function (event) {
	
	event.preventDefault();
	
	activeList = parentElement.querySelectorAll("a");
	
	activeList.forEach((element, ) => {
		 element.classList.remove(element.classList[0] + "_active");
		 });
	activeElement.classList.add(activeElement.classList[0] + '_active');
	
	carrentClassName = getCarrentClassName(event);
	bookElement.className = carrentClassName;
	
}
);

controlElements.addEventListener("mouseover", function (event) {
	
	bookElement.className = getCarrentClassName(event);
}
);

controlElements.addEventListener("mouseout", () => {bookElement.className = carrentClassName});
