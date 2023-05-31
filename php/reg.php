<?php
require 'conn.php';
if (isset($_POST['btn-reg'])) {
    $fullname = $_POST['fullname'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $content = $_POST['content'];
    print_r($fullname);
} else {
    echo "Please enter";
}
?>
<div>
    <a href="../tknt-index.php">Quay lại trang chủ</a>
</div>