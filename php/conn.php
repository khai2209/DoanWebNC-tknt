<?php
//DD;{1{&0#$4W
    $host = "localhost";
    $usename = "root";
    $password = "";
    $dbname = "user-aztech";

    $conn = new mysqli($host, $usename, $password, $dbname);
    if ($conn->connect_error) {
        die("connect false".$conn->connect_error);
    }
?>