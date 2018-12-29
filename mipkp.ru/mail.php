<?php

$recepient = "a.blizniuck@yandex.ru";
$sitename = "ipopb.ru";

$NameCompany = $_POST["nameCompany"];
$nameUser = $_POST["nameUser"];
$phone = $_POST["number"];
$city = $_POST["city"];
$message = "Название компании: $NameCompany \n Имя: $nameUser\n   Телефон: $phone \nТекст: $city";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
header('location: ../thank.html');