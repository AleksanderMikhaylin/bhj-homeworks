const bookElement = document.getElementById("book");
const controlElements = document.querySelector(".book__controls");

let carrentClassName = 'book';

let carrentData = {
	'book__control_font-size': {'key': undefined, 'dataset': 'size', 'className': 'book_fs-'},
	'book__control_color': {'key': undefined, 'dataset': 'textColor', 'className': 'book_color-'},
	'book__control_background': {'key': undefined, 'dataset': 'bgColor', 'className': 'book_bg-'},
	}

function getCarrentClassName(event, preview = false) {
	
	let carrentLocalClassName = 'book';
	let carrentLocalData = structuredClone(carrentData);
	
	
	activeElement = event.target;
	parentElement = activeElement.parentElement;
	
	carrentLocalData[parentElement.classList[1]]['key'] = activeElement.dataset[carrentLocalData[parentElement.classList[1]]['dataset']];
	
	for (const key in carrentData) {
		if (carrentLocalData[key]['key'] !== undefined) {
			carrentLocalClassName = carrentLocalClassName + ' ' + carrentLocalData[key]['className'] + carrentLocalData[key]['key'];
		}
	}
	
	if (!preview) {
		carrentData = carrentLocalData;
	}
	
	return carrentLocalClassName;	
}
	
controlElements.addEventListener("click", function (event) {
	
	event.preventDefault();
	
	activeList = parentElement.querySelectorAll("a");
	
	activeList.forEach((element) => {
		 element.classList.remove(element.classList[0] + "_active");
		 });
	activeElement.classList.add(activeElement.classList[0] + '_active');
	
	carrentClassName = getCarrentClassName(event);
	bookElement.className = carrentClassName;
	console.log(bookElement.className);
	
}
);

controlElements.addEventListener("mouseover", (event) => {
	event.preventDefault();
	bookElement.className = getCarrentClassName(event, true)
	}
);

controlElements.addEventListener("mouseout", () => {
	event.preventDefault();
	bookElement.className = carrentClassName;
	}
);
