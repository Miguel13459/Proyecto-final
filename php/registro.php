<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "intart";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

$sql = "INSERT INTO registro (nombre, apellido, email, telefono, usuario, clave) 
        VALUES ('$nombre', '$apellido', '$email', '$telefono', '$usuario', '$clave')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso!";
} else {
    echo "Error al registrar: " . $conn->error;
}

$conn->close();
?>