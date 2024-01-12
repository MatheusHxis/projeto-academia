<?php
    $dbhost = "database-2.c7gg06msoq51.us-east-2.rds.amazonaws.com";
    $dbusername = "admin";
    $dbpassword = "jon1092387456";
    $dbname = "academia";

    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);
    if ($conn->connect_error) {
        die("conexão falhou". $conn->connect_error);
    }
    echo "conexão certa";
?>