<?php
    // check if fields passed are empty
    if (empty($_POST['name'])  		||
        empty($_POST['phone']) 		||
        empty($_POST['email']) 		||
        empty($_POST['message'])	||
        !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
            echo "No arguments Provided!";
            return false;
        }

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    // create email body and send it
    $to = 'info@gardesystems.com';
    $email_subject = "Garde Contact Form: $name";
    $email_body = "You have received a new message from Garde website's contact form.\n" .
        "Here are the details:\n" .
        "Name: $name\n" .
        "Phone: $phone\n" .
        "Email: $email_address\n" .
        "Message:\n$message";

    $headers   = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/plain; charset=iso-8859-1";
    $headers[] = 'Date: ' . date('r', $_SERVER['REQUEST_TIME']);
    $headers[] = 'Message-ID: <' . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>';
    $headers[] = 'From: ' . $to;
    $headers[] = 'Reply-To: ' . $to;
    $headers[] = 'Return-Path: ' . $to;
    $headers[] = 'X-Mailer: PHP v' . phpversion();
    $headers[] = 'X-Originating-IP: ' . $_SERVER['SERVER_ADDR'];

    mail($to, $email_subject, $email_body, implode("\r\n", $headers));
    return true;
?>