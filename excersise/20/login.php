<!DOCTYPE html>

<?php 

  if(!empty($_POST['username']) && !empty($_POST['password']) && isset($_POST['enter'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $fileHandle = fopen("accounts.csv", "r");
    
    $userFound = null;
    while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
        if ($username === $row[0]) $userFound = $row; 
    }
    
    if($userFound === null) {
      echo "<script> alert('User not found.');</script>";
    } else {
      if($userFound[1] === hash("sha512", $password . "^3)xqQku)L'3`dpQ")) {
        echo "<script> alert('Login sucessful!');</script>";
      } else {
        echo "<script> alert('Wrong password.');</script>";
      }
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
      <h1> <u> Einloggen </u> </h1>
      <br>
      <input type="text" id="username" name="username" placeholder="Benutzername">
      <br><br>
      <input type="password" id="password" name="password" placeholder="Passwort">
      <br><br>
      <input type="submit" name="enter" value="Einloggen">
    </form>
  
  </body>
</html>

