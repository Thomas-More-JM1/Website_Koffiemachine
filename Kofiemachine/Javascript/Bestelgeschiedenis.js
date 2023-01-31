fetch("https://jmapi.bacbat32.com/bestelgeschiedenis")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Hier kun je de data gebruiken om een kolom te maken
  })
  .catch(error => console.error(error));
