fetch("https://jmapi.bacbat32.com/email-adres")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Hier kun je de data gebruiken om het e-mailadres weer te geven
  })
  .catch(error => console.error(error));

  form.addEventListener("submit", e => {
    e.preventDefault();
    const huidigeWachtwoord = form.huidigeWachtwoord.value;
    const nieuweWachtwoord = form.nieuweWachtwoord.value;
    fetch("https://jmapi.bacbat32.com/wachtwoord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ huidigeWachtwoord, nieuweWachtwoord })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Hier kun je bijvoorbeeld een bericht weergeven dat het wachtwoord is veranderd
      })
      .catch(error => console.error(error));
  });
  