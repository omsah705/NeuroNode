<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'someone@gmail.com'

$email_subject = 'New From Submission'

$email_body = "User Name: $name.\n".
               "User Email: $visitor_email.\n".
               "User Email: $subject.\n".
               "User Message: $message.\n";

               $To = 'l95149896@gmail.com';

$headers = "From: $email_from \r\n";
$headers = "REply-to: $visitor_email\r\n";


mail($to,$email_subject,$email_body,$headers);

header("location: contact.html");

?>

