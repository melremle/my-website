<?php
    if(isset($_POST['submit'])){
        require 'phpmailer/PHPMailerAutoload.php';
        $mail = new PHPMailer;

        $mail->Host='smtp.gmail.com';
        $mail->Port=587;
        $mail->SMTPAuth=true;
        $mail->SMTPSecure='tls';
        $mail->Username='remle0409@gmail.com';
        $mail->Password='mhelmina25';

        $mail->setFrom($_POST['email'],$_POST['name']);
        $mail->addAddress('melre2596@gmail.com');
        
        $mail->isHTML(true);
        $mail->Subject="Subject: " .$_POST['subject'];
        $mail->Body='<h1 align=center>Name: '.$_POST['name'].'<br>Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</h1>';

        if(!$mail->send()){
            echo json_encode(false);
        }
        else{
            echo json_encode(true);
        }
    }

?>