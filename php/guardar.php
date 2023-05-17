<?php

    include_once("abrir.php");

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    echo "los datos son los siguientes: ";
    echo "$nombre, $apellido, $email, $telefono, $usuario y $clave";

    $conectar=conn();
    $sql = "INSERT INTO registro (id, nombre, apellido, email, telefono, usuario, clave) 
    VALUES('$nombre', '$apellido', '$email', '$telefono', '$usuario', '$clave')";
    $resul = mysqli_query($conectar, $sql) or trigger_error("Query failed SQL-error: ".mysqli_error($usuario));

    echo "$sql";

        ?>