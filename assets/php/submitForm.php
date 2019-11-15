<?php
    header("Content-Type: application/json");

    $str = file_get_contents('php://input');
    $results = json_decode($str, true);
    
    $name = $results['name'];
    $email = $results['email'];
    $phone = $results['phone'];
    $company = $results['company'];
    $currentsite = $results['currentsite'];
    $message = $results['message'];

    $message = "From: " . $name . "\n" . "Email Address: " . $email . "\n". "Phone Number: " . $phone . "\n". "Company Name: " . $company . "\n" . "Current Website: " . $currentsite . "\n\n" . "Message: " . $message];

    $from="From: $name<$email>\r\nReturn-path: $email";
    $subject="Sawtooth Digital Contact";
    mail("contact@sawtooth.dev", $subject, $message, $from);
?>