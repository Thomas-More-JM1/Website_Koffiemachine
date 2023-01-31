fetch("https://jmapi.bacbat32.com/data/day")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Hier kun je de data gebruiken om grafieken te maken met bibliotheken zoals D3 of Chart.js
  })
  .catch(error => console.error(error));



  fetch("https://jmapi.bacbat32.com/data/week")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Hier kun je de data gebruiken om grafieken te maken met bibliotheken zoals D3 of Chart.js
  })
  .catch(error => console.error(error));


  fetch("https://jmapi.bacbat32.com/data/month")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Hier kun je de data gebruiken om grafieken te maken met bibliotheken zoals D3 of Chart.js
  })
  .catch(error => console.error(error));



  fetch("https://jmapi.bacbat32.com/data/year")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Hier kun je de data gebruiken om grafieken te maken met bibliotheken zoals D3 of Chart.js
  })
  .catch(error => console.error(error));
  