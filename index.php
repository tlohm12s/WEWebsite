<?php 

    session_start();
    $salt = "^3)xqQku)L'3`dpQ";

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
                if (hash("sha512", $password.$salt) === $row[0]) $userFound = $row; 
            }
            
            if($userFound === null) {
                echo "<script> alert('User not found.');</script>";
            } else {
                if($userFound[1] === hash("sha512", $password.$salt)) {
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
    }

?>

<!DOCTYPE html>
<html>

    <head>

        <title>My Page</title>

        <meta charset="utf-8"/>

        <link rel="shortcut icon" href="favicon.png">

        <link rel="stylesheet" type="text/css" href="styles.css" />

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