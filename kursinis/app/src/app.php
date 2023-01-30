<?php  
    if(isset($_POST['submit'])) {


    $vardas = trim($_POST['fname']);
    $pavarde = trim($_POST['lname']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    $bobcat = trim($_POST['paslauga1']);
    $veja = trim($_POST['paslauga2']);
    $trinkeles = trim($_POST['paslauga3']);


    if(!empty($vardas) && !empty($pavarde) && !empty($email) ) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            include 'db.php';
            $from = $email;
            $to = "1995aleks@gmail.com";
            $subject = "Nauja zinute";
            $autorius = 'Nuo: ' . $vardas . ' ' . $pavarde . ', ' . $email;
            $zinute = htmlspecialchars($message);
           // mail($to, $subject, $autorius, $zinute, $from);

} ?>

<script>alert('Dekojame. Jusu zinute gavome. Netrukus susisieksime')</script>


<?php
}
    }
    ?>