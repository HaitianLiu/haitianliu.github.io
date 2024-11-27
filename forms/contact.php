<?php
  // Replace this with your real receiving email address
  $receiving_email_address = 'haitian.job@gmail.com';

  // Check if form data exists
  if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Compose email
    $email_subject = "New message from: $name";
    $email_body = "You have received a new message from $name.\n\n".
                  "Email: $email\n\n".
                  "Message:\n$message";

    // Set headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email using PHP mail function
    if(mail($receiving_email_address, $email_subject, $email_body, $headers)) {
      echo "Message sent successfully!";
    } else {
      echo "Failed to send message.";
    }

  } else {
    echo "Please fill in all required fields.";
  }
?>

