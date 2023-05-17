<?php

    function conn(){
        $hostname = "localhost";
        $usuario = "root";
        $password = "";
        $name = "intart";

        $conectar = mysqli_connect($hostname, $usuario, $password, $name);
        return $conectar;
    }
?>