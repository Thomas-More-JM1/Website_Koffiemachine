<?php
$password = $_POST['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "UPDATE users SET password = '$hashed_password' WHERE id = '$user_id'";
mysqli_query($conn, $sql);

echo "Password updated successfully!";
?>
