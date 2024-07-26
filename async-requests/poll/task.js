const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const valueResp = JSON.parse(xhr.responseText);

    const pollTitle = document.getElementById('poll__title');
    pollTitle.textContent = valueResp.data.title;
    const buttonArray = valueResp.data.answers;
    const pollAnswers = document.getElementById('poll__answers');
    for (btn in buttonArray) {
        const buttonInsert = 
        `<button class="poll__answer">${buttonArray[btn]}</button>`;         
        pollAnswers.insertAdjacentHTML('beforeEnd', buttonInsert);   
    }

    let btnAnswer = document.getElementsByClassName('poll__answer');
    for (let btn of btnAnswer){
      btn.addEventListener('click', () => {
        event.preventDefault(); 
        alert(`Спасибо, ваш голос засчитан!`);
      })
    }
  }    
})
