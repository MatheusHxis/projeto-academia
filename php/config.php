<?php
    $dbhost = "";
    $dbusername = "";
    $dbpassword = "";
    $dbname = "";

    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);
    if ($conn->connect_error) {
        die("conexão falhou". $conn->connect_error);
    }
    echo "conexão certa";
?>