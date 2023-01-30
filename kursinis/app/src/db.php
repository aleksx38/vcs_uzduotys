<?php
    define("DB_SERVER", "localhost");
    define("DB_USER", "root");
    define("DB_PASSWORD", "");
    define("DB_NAME", "baigiamasis");

    $mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
    if($mysqli->connect_error) {
        echo "Atsiprasome, ivyko klaida\n";
        echo 'Klaida: ' . $mysqli->connect_error . '\n';
        exit();
    }

    mysqli_query($mysqli, "INSERT INTO klientai (vardas, pavarde, email, bobcat, veja, trinkeles, message) VALUES('$_POST[fname]', '$_POST[lname]', '$_POST[email]', '$_POST[paslauga1]', '$_POST[paslauga2]', '$_POST[paslauga3]', '$_POST[message]')");
?>