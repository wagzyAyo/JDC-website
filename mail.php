<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $age = $_POST["age"];
    $gender = $_POST["gender"];
    $location = $_POST["location"];


    $from = "info@ajaccountinglens.com"; 
    $to = "talktojmcvibes@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nPhone Number: $number\nAge: $age\nGender: $gender\nLocation: $location";

    $headers = "From: $from \r\n";
    $headers .= "Reply-To: $email \r\n";

    if (mail($to, $subject, $body, $headers)) { 
        header("Location: success.html");
        exit;
    } else {
        echo "Error: Unable to send message";
    }
} else {
    echo "Invalid request method.";
}
?>
