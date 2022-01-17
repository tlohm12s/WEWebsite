<?php 
  session_start();

  $salt = "Mo7iFa4W";

  //Sha512 secretuser test
  $account_user = "a1cd351b89892598afef994cd4b1e21bc114e336db3fff8e1dc5daeb190d155fd21c043ed2c64549a9478d669f7bb198f7ca4bf71907db0e0cd7042c9f713542";
  $account_password = "fc345803f59a0374122a3bf8d133cc8f0669b484937ba032a007320c2d96eae9b20468052d53e9275a46c7cb0246d385680840bd4396e3ea1bd599210e643c0c"; 
  $accounttoken = "otbMNB38";

  if(!empty($_POST['username']) && !empty($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if(hash("sha512", $username . $salt) !== $account_user) {
      echo "<script> alert('User not found.');</script>";
    } else {
      if(hash("sha512", $password . $salt) == $account_password) {
        $_SESSION['token'] = $accounttoken;
        echo "<script> alert('Login sucessful!');</script>";
        echo "<script>window.onload = function(){document.getElementById('editmode_toggle').disabled = false; document.getElementById('login').disabled = true; document.getElementById('login').value = 'Logged in';}; </script>";
      } else {
        echo "<script> alert('Wrong password.');</script>";
      }
    }
  }

  if($_SESSION['token'] == $accounttoken) {
    echo "<script>window.onload = function(){document.getElementById('editmode_toggle').disabled = false; document.getElementById('login').disabled = true; document.getElementById('login').value = 'Logged in';}; </script>";
  }

?>

<!DOCTYPE html>

<html>

    <head>

        <meta charset="utf-8"/>

        <script src="site.js"> </script>
        <title>WWW - Navigator</title>

        <style>
            * {
                box-sizing: border-box;
            }

            html, body {
                height: 99%;
            }

            input[type="button"] {
                width: 12em;
                height: 2em;
            }

            nav {
                margin-bottom: 3em;
            }

            nav input {
                margin-left: 1em;
                margin-right: 1em;
            }
        </style>

    </head>

    <body>

        <div style="background-color: LightSteelBlue; border-radius: 1em; height: 100%;">
            <header style="background-color: steelblue; border-radius: 1em; padding-top: 0.1em; padding-bottom: 0.1em;">
                <input id="editmode_toggle" type="button" style="position: absolute; top: 35px; left: 55px;" value="Edit Mode: Off" disabled>

                <form method="post">
                    <input id="username" name="username" style="position: absolute; top: 25px; left: 235px;" placeholder="Username">
                    <input id="password" name="password" type="password" style="position: absolute; top: 55px; left: 235px;" placeholder="Password">
                    <input id="login" type="submit" style="position: absolute; top: 35px; left: 435px;" value="Login">
                </form>
                <h1 style="text-align: center;"> <u> WWW-Navigator </u> </h1> 
            </header>

            <nav style="margin-top: 1.2em; text-align: center;" id="categories"></nav>

            <aside style="vertical-align: top;  text-align: center; width: 20%; display: inline-block;" id="subcategories"></aside>
            
            <article style="background-color: LightBlue; vertical-align: top; width: 59%; display: inline-block; border-radius: 1em; padding: 1em 2em 1em 1em;" id="article_field"><div id="content"></div></article>

            <aside style="vertical-align: top; width: 20%; display: inline-block; padding-left: 5em; word-wrap: break-word;" id="information"> <u>Referenzen:</u> <br> <ul id="references"> </ul> </aside>

        </div>
    </body>

</html>