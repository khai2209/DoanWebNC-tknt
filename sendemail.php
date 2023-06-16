<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/tknt-style.css">
</head>
<body>
<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require "lib/PHPMailer/src/Exception.php";
    require "lib/PHPMailer/src/PHPMailer.php";
    require "lib/PHPMailer/src/SMTP.php";



    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $fullname = $_POST["fullname"];
        $phone = $_POST["phone"];
        $address = $_POST["address"];
        $content = $_POST["content"];

        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = '7saodo@gmail.com';
            $mail->Password = 'wbjsiuvvznokpdiz';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;
    
            $mail->setFrom('7saodo@gmail.com', 'Nhom 3');
            $mail->addAddress('luuquangkhai4902@gmail.com');
    
            $mail->isHTML(true);
            $mail->Subject = 'Thông tin đăng ký';
            $mail->Body = "Họ và tên: $fullname<br>
                           Điện thoại: $phone<br>
                           Địa chỉ: $address<br>
                           Nội dung tư vấn: $content";
    
            $mail->send();
        } catch (Exception $e) {
            echo '';
        }

    }
?>
</body>
</html>
