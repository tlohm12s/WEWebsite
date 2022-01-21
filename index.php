<?php 

    session_start();

    if($_GET['action'] == 'logout') {
        unset($_SESSION['loggedin']);
        header("Location: index.php");
    }

    if(!empty($_POST['username']) && !empty($_POST['password'])) {

        $username = $_POST['username'];
        $password = $_POST['password'];
        $file = "accounts.csv";

        if (isset($_POST['login'])) {
            $fileHandle = fopen($file, "r");
            
            $userFound = null;
            while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
                if (hash("sha512", $password . "^3)xqQku)L'3`dpQ") === $row[0]) $userFound = $row; 
            }
            
            if($userFound === null) {
                echo "<script> alert('User not found.');</script>";
            } else {
                if($userFound[1] === hash("sha512", $password . "^3)xqQku)L'3`dpQ")) {
                    echo "<script> alert('Login sucessful!');</script>";
                    $_SESSION['loggedin'] = true;
                    header("Refresh: 0");
                } else {
                    echo "<script> alert('Wrong password.');</script>";
                }
            }
        } else if(isset($_POST['register'])) {
            $new_line = hash("sha512", $username . "^3)xqQku)L'3`dpQ") . "," . hash("sha512", $password . "^3)xqQku)L'3`dpQ") . "\n";
        
            $file = file_put_contents( $file, $new_line, FILE_APPEND | LOCK_EX );
        
            if ($file) {
              echo "<script> alert('Registered successfully!');</script>";
            } else {
              echo "<script> alert('Registration failed. Error: " . var_dump($file) . "');</script>";
            }
        }
    }

?>

<!DOCTYPE html>
<html>

    <head>

        <title>My Page</title>

        <meta charset="utf-8"/>

        <link rel="shortcut icon" href="favicon.png">

        <style>
            * {
                box-sizing: border-box;
            }

            .center {
                margin: auto;
                margin-top: 2%;
                width: 90%;
            }

            html, body {
                height: 100%;
                margin: 0;
            }

            body {
                display: grid;
                grid-template-rows: 22% 2fr 6%;
                grid-template-columns: 100%;
            }

            form {
                text-align:center;

                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
            }

            .log-out {
                display: block; 

                position: absolute; 
                top: 50%;
                right: 9%;

                -webkit-transform: translate(0, -50%);
                transform: translate(0, -50%);

                visibility: hidden;
            }

            header {
                position: relative;

                background-color: steelblue;

                grid-row: 1/2;
                grid-column: auto;

                text-align: center;
            }

            section {
                background-color: aliceblue;

                grid-row: 2/3;
                grid-column: auto;
            }

            footer {
                position: relative;
                background-color: steelblue;

                grid-row: 3/4;
                grid-column: auto;
            }

            .footer-link {
                margin: 0;
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);

                color: white; 
            }
            
            .title {
                background-color: powderblue;
                border-radius: 5px;
                padding: 15px;

                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -75%);

                /*https://www.w3schools.com/css/css3_shadows.asp*/
                color: white;
                text-shadow: 2px 2px 4px #000000;
            }

            nav {
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                justify-content: center;

                overflow: hidden;
            }

            .nav-item {
                border: solid 5px;
                text-align: center;

                padding: 15px;
                border-radius: 5px;
                margin: 2%;

                background-color: powderblue;
                width: 360px;
                height: 350px;

                word-wrap: break-word;
            }

            /* https://stackoverflow.com/questions/166160/how-can-i-scale-the-content-of-an-iframe */
            iframe {
                overflow: hidden;
                border: solid;

                width: 1280px;
                height: 786px;

                border: solid;
                
                -ms-transform: scale(0.25);
                -moz-transform: scale(0.25);
                -o-transform: scale(0.25);
                -webkit-transform: scale(0.25);
                transform: scale(0.25);
                
                -ms-transform-origin: 0 0;
                -moz-transform-origin: 0 0;
                -o-transform-origin: 0 0;
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
            }
        </style>

    </head>

    <body>
        
        <header>
            <h1 class="title"><u> 2021 WS - Einführung in Web Engineering <br> (Meine Homepage) </u></h1>

            <input type="button" id="logout_button" class="log-out" value="Log out" onclick="history.pushState(null, null, '?action=logout'); location.reload(true); ">
        </header>

        <?php 

             if(!$_SESSION['loggedin']) {
                if($_GET['action'] == 'register') {
                    include_once('register.php');
                } else {
                    include_once('login.php');
                }
            } else {
                include_once('main.php');
                echo "<script> document.getElementById('logout_button').style.visibility = 'visible'; </script>";
            }

        ?>

        <footer>
            <a class="footer-link" style="left: 15px;" href="https://github.com/tlohm12s/WEWebsite">Link to Github-Repository</a>
            <a class="footer-link" style="right: 15px;" href="mailto:tobias-lohmueller@live.de">By Tobias Lohmüller (2022)</a>
        </footer>

    </body>

</html>