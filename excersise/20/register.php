

<!DOCTYPE html>

<?php 
  //Teilweise Aus der Vorlesung PHP
  if(!empty($_POST['username']) && !empty($_POST['password']) && isset($_POST['enter'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $file = "accounts.csv";
    $new_line = $username . "," . hash("sha512", $password . "^3)xqQku)L'3`dpQ") . "\n";

    $file = file_put_contents( $file, $new_line, FILE_APPEND | LOCK_EX );

    if ($file) {
      echo "<script> alert('Registered successfully!');</script>";
    } else {
      echo "<script> alert('Registration failed. Error: " . var_dump($file) . "');</script>";
    }
  }
?>

<html>

  <head>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        height: 100%;
      }

      form {
        text-align:center;

        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    </style>
  </head>

  <body>
    
  
    <form style="" method="post">
      <h1> <u> Registrieren </u> </h1>
      <br>
      <input type="text" id="username" name="username" placeholder="Benutzername">
      <br><br>
      <input type="password" id="password" name="password" placeholder="Passwort">
      <br><br>
      <input type="submit" name="enter" value="Registrieren">
    </form>
  
  </body>
</html>

