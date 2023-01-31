<?php
  // Verbind met de database
  $db = mysqli_connect("host", "gebruikersnaam", "wachtwoord", "databasenaam");
  
  // Haal de gegevens uit het formulier
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  
