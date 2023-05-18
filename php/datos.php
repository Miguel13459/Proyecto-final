<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "intart";

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$comentarios = $_POST['comentarios'];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "INSERT INTO datos (nombre, apellido, telefono, email, comentarios)
        VALUES ('$nombre', '$apellido', '$telefono', '$email', '$comentarios')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error al registrar: " . $conn->error;
}

$conn->close();
?>
