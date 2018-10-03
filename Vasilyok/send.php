<?php
ini_set('display_errors','On');
error_reporting('E_ALL');

$fio = $_POST['fio'];
$email = $_POST['email'];
$text = $_POST['text'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);

$fio = trim($fio);
$email = trim($email);
$text = trim($text);


echo $fio;
echo "<br>";
echo $fio;
echo "<br>";
echo $text;


;

if (mail("stalker3343@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: info@vasilyoklyoshatext \r\n"))
{
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}


?>