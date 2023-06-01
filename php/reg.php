<?php
require 'conn.php';
$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$content = $_POST['content'];                                           

if (isset($fullname) && isset($phone) && isset($address) && isset($content)) {
    if(!empty($fullname) && !empty($phone) && !empty($address) && !empty($content)) {
            $sql = "INSERT INTO `user` (`fullname`, `phone`, `address`, `content` ) values ('$fullname', '$phone', '$address', '$content')";
        if($conn->query($sql)===true) {
               echo "<p>Bạn đã đăng ký nhận tư vấn thành công. Chúng tôi sẽ liên lạc với bạn trong vòng 24h tới</p>";
        } else {
            echo "lỗi {$sql}" . $conn->error;
        }
    }
}

?>
<div>
    <a href="../tknt-index.php">Quay lại trang chủ</a>
</div>