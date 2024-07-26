let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();  
xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState == 4 && xhr.status === 200) {
      const loader = document.getElementById('loader');
      loader.classList.remove('loader_active');
      const valueResp = JSON.parse(xhr.responseText);
      const items = document.getElementById('items');
      const arrayQuery = valueResp.response.Valute;
      for (let key in arrayQuery){
        const pasteDivs= ` 
        <div class="item">
          <div class="item__code">${arrayQuery[key].CharCode}</div>
          <div class="item__value">${arrayQuery[key].Value}</div>
          <div class="item__currency">руб.</div>
        </div>`;  

        items.insertAdjacentHTML('beforeEnd', pasteDivs);
      }
    } 
})
