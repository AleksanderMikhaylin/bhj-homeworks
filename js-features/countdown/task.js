const counterDown = function () {
  const timerElement = document.getElementById("timer");
  let timer = Number(timerElement.textContent);
  
    timer -= 1;
    if (timer <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(inervalId);
    }
}

const inervalId = setInterval(counterDown, 1000);
