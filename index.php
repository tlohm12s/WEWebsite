<?php 

    session_start();
    $salt = "^3)xqQku)L'3`dpQ";

    //Sha512 secretuser test
    $secret_user = "2c3da63cfc19b5849a524c73b80e4ba4fe92d39b67f791363f4e86a99c503425e6885140c7607a9e91352b8fae146fe4e5f155c84160aa7c7a3d12dad3c391cd";
    $secret_password = "91bc0ff5a132ad61e602dc1f59819a0f262b105798116728c37a3ff5442a74fa97d860b4a9f6e935829c4061497ae7ad69d0dc08cead014086671c28d16d1d02"; 
    $secrettoken = "otbMNB38";

    if($_GET['action'] == 'logout') {
        session_destroy();

        header("Location: index.php");
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if(!empty($_POST['username']) && !empty($_POST['password'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $file = "resources/accounts.csv";

            if (isset($_POST['login'])) {
                $fileHandle = fopen($file, "r");
                
                $userFound = null;
                while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
                    if (hash("sha512", $password.$salt) === $row[0]) $userFound = $row; 
                }
                
                if($userFound === null && hash("sha512", $username.$salt) !== $secret_user) {
                    echo "<script> alert('User not found.');</script>";
                } else {
                    if (hash("sha512", $username.$salt) === $secret_user && hash("sha512", $password.$salt) === $secret_password) {
                        $_SESSION['loggedin'] = true;
                        $_SESSION['token'] = $secrettoken;
                    } else if($userFound[1] === hash("sha512", $password.$salt)) {
                        $_SESSION['loggedin'] = true;
                    } else {
                        echo "<script> alert('Wrong password.');</script>";
                    }
                }
            } else if(isset($_POST['register'])) {
                $new_line = hash("sha512", $username.$salt) . "," . hash("sha512", $password.$salt) . "\n";
            
                $file = file_put_contents( $file, $new_line, FILE_APPEND | LOCK_EX );
            
                if ($file) {
                echo "<script> alert('Registered successfully!');</script>";
                } else {
                echo "<script> alert('Registration failed. Error: " . var_dump($file) . "');</script>";
                }
            }
        } else {
            echo "<script> alert('Please enter a username and password!');</script>";
        }
    }

    if($_SESSION['token'] == $secrettoken) {
      echo "<script>window.onload = function(){document.getElementById('editmode_toggle').disabled = false; document.getElementById('login').disabled = true; document.getElementById('login').value = 'Logged in';}; </script>";
    }

?>

<!DOCTYPE html>
<html>

    <head>

        <title>My Page</title>

        <meta charset="utf-8"/>

        <link rel="shortcut icon" href="favicon.png">

        <link rel="stylesheet" type="text/css" href="/css/styles.css" />

    </head>

    <body>
        
        <header>
            <h1 class="title"><u> 2021 WS - Einführung in Web Engineering <br> (Meine Homepage) </u></h1>

            <input type="button" id="logout_button" class="log-out" value="Log out" onclick="history.pushState(null, null, '?action=logout'); location.reload(true); ">

            <a class="wwwnav-link" id="wwwnav" href="index.php?show=navigator"> Hier geht es zum WWW-Navigator 3.0 </a>
            <a class="wwwnav-link" id="wwwnav_leave" href="index.php"> Hier geht es zurück zur Homepage </a>
        </header>

        <?php 
        //include_once('main.php');
        

            if(!$_SESSION['loggedin']) {
                if($_GET['action'] == 'register') {
                    include_once('register.php');
                } else {
                    include_once('login.php');
                }
            } else {
                echo "<script> 
                    document.getElementById('logout_button').style.visibility = 'visible'; 
                </script>";

                if($_GET['show'] == 'navigator') {
                    echo "<script> 
                        document.getElementById('wwwnav_leave').style.visibility = 'visible'; 
                    </script>";

                    include_once('www-navigator/index.php');
                } else {
                    echo "<script> 
                        document.getElementById('wwwnav').style.visibility = 'visible'; 
                    </script>";

                    include_once('main.php');
                }
            }
        
        ?>

        <footer>
            <a class="footer-link" style="left: 15px;" href="https://github.com/tlohm12s/WEWebsite">Link to Github-Repository</a>
            <a class="footer-link" style="right: 15px;" href="mailto:tobias-lohmueller@live.de">By Tobias Lohmüller (2022)</a>
        </footer>

    </body>

</html>