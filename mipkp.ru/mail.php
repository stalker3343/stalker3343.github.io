<?php

$recepient = "a.blizniuck@yandex.ru";
$sitename = "ipopb.ru";

$NameCompany = trim($_POST["nameCompany"]);
$nameUser = trim($_POST["nameUser"]);
$phone = trim($_POST["number"]);
$city = trim($_POST["city"]);
$message = "Название компании: $NameCompany \n Имя: $nameUser\n   Телефон: $phone \nТекст: $city";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");