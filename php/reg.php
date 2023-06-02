<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/tknt-style.css">
    <title>Success</title>
</head>

<body>
    <div id="reg-main">
        <div class="reg-container">
            <div class="reg-message">
                <?php
                require 'conn.php';
                $fullname = $_POST['fullname'];
                $phone = $_POST['phone'];
                $address = $_POST['address'];
                $content = $_POST['content'];

                if (isset($fullname) && isset($phone) && isset($address) && isset($content)) {
                    if (!empty($fullname) && !empty($phone) && !empty($address) && !empty($content)) {
                        $sql = "INSERT INTO `user` (`fullname`, `phone`, `address`, `content` ) values ('$fullname', '$phone', '$address', '$content')";
                        if ($conn->query($sql) === true) {
                            echo
                            '<p id = "message-success">
                Bạn đã đăng ký nhận tư vấn thành công. Chúng tôi sẽ liên lạc với bạn trong vòng 24h tới.
            </p>';
                        } else {
                            echo "lỗi {$sql}" . $conn->error;
                        }
                    }
                }

                ?>
            </div>

            <div class="reg-btn__back">
                <a href="../tknt-index.php">Quay lại</a>
            </div>
        </div>
    </div>

</body>

</html>