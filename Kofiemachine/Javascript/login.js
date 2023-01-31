// Wanneer het formulier ingediend is, gaat deze functie uitgevoerd worden.
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Haal de ingevulde gebruikersnaam en wachtwoord op.
    var username = document.querySelector("#emaillogin").value;
    var password = document.querySelector("#passwordlogin").value;
  
    // Maak een object met de ingevulde gebruikersnaam en wachtwoord.
    var user = {
      username: username,
      password: password
    };
  
    // Stuur het object naar de API.
    fetch("https://jmapi.bacbat32.com/users/", {
      method: "GET",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Controleer of de gebruiker een poetsploeg, docent of student is.
      if (data.role === "poetsploeg") {
        // Stuur de gebruiker naar de index pagina voor de poetsploeg.
        window.location.href = "/Website_poetsploeg/index_poetsploeg.html";
      } else if (data.role === "docent" || data.role === "student") {
        // Stuur de gebruiker naar de index pagina voor docenten en studenten.
        window.location.href = "/Website_student_docent/index_student_docent.html";
      } else {
        // Geef een foutmelding als de gebruiker geen geldige rol heeft.
        alert("Ongeldige gebruikersnaam of wachtwoord.");
      }
    })
    .catch(function(error) {
      console.error("Fout bij het versturen van de gegevens:", error);
    });
});


const form = document.querySelector('.nieuwe-gebruiker form');
const emailInput = document.querySelector('#emailcreate');
const passwordInput = document.querySelector('#passwordcreate');
const groepInput = document.querySelector('#groep');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const groep = groepInput.value;

  const data = JSON.stringify({
    email: email,
    password: password,
    groep: groep,
  });

  console.log(data)

  fetch('https://jmapi.bacbat32.com/users/create/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

});

