<?php
    $host = "localhost";
    $usename = "root";
    $password = "";
    $dbname = "user-aztech";

    $conn = new mysqli($host, $usename, $password, $dbname);
    if ($conn->connect_error) {
        die("connect false".$conn->connect_error);
    }
    echo "Kết nối thành công"."<br>";
?>