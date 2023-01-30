<!DOCTYPE html>
<html>
    <head>
        <!--
        <link rel="stylesheet" href="./resources/css/reset.css" type="text/css">
        -->
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js" defer></script>
        <script src="https://kit.fontawesome.com/7bf6d4d1ad.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <title>UAB "Žolės tvarkymas"</title>
        <link rel="stylesheet" href="../app/css/styles.css" type="text/css">
        <link rel="stylesheet" href="../app/css/color.css" type="text/css">
        <script src="../app/js/custom.js" defer></script>
        <script src="../app/js/new.js" defer></script>
        <script src="../app/js/fancyapps.js" defer></script>
    </head>

    <body>

    <header id="header">
        <div class="container">
            <!-- NUOTRAUKA / LOGO -->
            <a href="pagrindinis.php"><img class="logo" src="../app/images/logo.png" alt="logo"></a>
                
            
            <!-- PAGRINDINIS NAV BAR (BE KONTAKTAI)-->
            <div class="topNav" id="MyTopnav">
                <a href="pagrindinis.php">Apie</a>
                <a href="paslaugos.php">Paslaugos</a>
                <a href="projektai.php">Projektai</a>
                <a href="kontaktai.php" id="contact">Kontaktai</a>
                <a href="javascript:void(0);" class="icon" onclick="funkcija()">
                    <i class="fa fa-bars"></i>
                </a>

                <script>
                    function funkcija() {
                        var x = document.getElementById("MyTopnav");
                        if (x.className === "topNav") {
                        x.className += " responsive";
                        } else {
                        x.className = "topNav";
                        }
                    }
                    </script>
            </div>
            <a class="cta" href="./kontaktai.php"><button>Kontaktai</button></a>
        </div>
    </header>
    <button id="myBtn" title="Go to top">I virsu</button>
    <script>
        let myBtn = document.getElementById('myBtn').click(function() {
            getElementsById("header").animate({ scrollTop: 0 }, "slow");
        return false;
        })
    </script>

 <!--
  <script>
        function virsun() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
    </script>
-->   

<!--
        <header>
            <div class="container">
            <a href="pagrindinis.php"><img class="logo" src="../app/images/logo.png" alt="logo"></a>
                <nav>
                    <ul class="nav-links">
                        <li><a href="paslaugos.php">Paslaugos</a></li>
                        <li><a href="projektai.php">Projektai</a></li>
                        <li><a href="pagrindinis.php">Apie</a></li>
                    </ul>
                </nav>
            
            "Hamburger menu" / "Bar icon" to toggle the navigation links
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
            
            
            <a class="cta" href="./kontaktai.php"><button>Kontaktai</button></a>
            </div>
        </header>

         -->