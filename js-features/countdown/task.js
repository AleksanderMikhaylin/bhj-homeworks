const addText = function () {
    const timerId = document.getElementById("timer");
    timerId.textContent -= 1;
    if (timerId.textContent <= 0) {
		timerId.textContent = "";
		const statusId = document.getElementById("status");
		statusId.textContent = "Конкурс завершен";
        alert('Вы выиграли');
        clearInterval(inervalID);
    }
}
const inervalID = setInterval(addText, 1000);
