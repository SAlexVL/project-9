<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userSite = $_POST['userSite'];
$userQuestion = $_POST['userQuestion'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'mysendphp23@gmail.com';                     // SMTP username
    $mail->Password   = 'passwordsendphp123';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
    $mail->CharSet = "utf-8";
    //Recipients
    $mail->setFrom('mysendphp23@gmail.com');
    $mail->addAddress('gdv_1998@mail.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Новая заявка на стоимость SAYTSPB";
    $mail->Body    = "Имя пользователя: ${userName} <br> Почта: ${userEmail} <br> Сайт: ${userSite} <br> Вопрос: ${userQuestion}";



    $mail->send();

} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
?>