<?php
    require 'conn.php';
    if(isset($_POST['btn-reg'])) {
        $fullname = $_POST['fullname'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $content = $_POST['content'];
        if(!empty($fullname) && !empty($phone) && !empty($address)) {
            $sql = "INSERT INTO `user` (`fullname`, `phone`, `address`, `content`) VALUES('$fullname', '$phone', '$address', '$content')";
            if($conn->query($sql)===TRUE) {
                echo "Lưu dữ liệu thành công"."<br>";
            }else {
                echo "Lỗi {$sql}".$conn->error;
            }
        }
    }
?>
<a href="../tknt-index.php">Quay lại trang chủ</a>