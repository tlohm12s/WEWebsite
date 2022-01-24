<?php 

    $token = isset($_SESSION['csrf']) ? $_SESSION['csrf'] : "";
    if (!$token) {
        $token = hash("sha512", uniqid());
        $_SESSION['csrf']= $token;
    }

?>
<script src="javascript/wwwnavsite.js"> </script>

<style>
    nav {
        margin-bottom: 3em;
    }

    nav input {
        margin-left: 1em;
        margin-right: 1em;
    }
</style>


<section style="border-radius: 1em; margin-top: 1%;">
    <input type="hidden" id="token" value="<?php echo $token; ?>" />
    <header style="background-color: steelblue; border-radius: 1em; padding-top: 0.1em; padding-bottom: 0.1em; margin: auto; margin-left: 1%; margin-right: 1%;">
        <input id="editmode_toggle" type="button" style="position: absolute; top: 50%; left: 55px; -webkit-transform: translate(0, -50%); transform: translate(0, -50%);" value="Edit Mode: Off" disabled>

        <h1 style="text-align: center;"> <u> WWW-Navigator </u> </h1> 
    </header>

    <nav style="margin-top: 1.2em; text-align: center;" id="categories"></nav>

    <aside style="vertical-align: top;  text-align: center; width: 20%; display: inline-block;" id="subcategories"></aside>
    
    <article style="background-color: LightBlue; vertical-align: top; width: 59%; display: inline-block; border-radius: 1em; padding: 1em 2em 1em 1em;" id="article_field"><div id="content"></div></article>

    <aside style="vertical-align: top; width: 20%; display: inline-block; padding-left: 5em; word-wrap: break-word; padding-right: 30px;" id="information"> <u>Referenzen:</u> <br> <ul id="references"> </ul> </aside>

</section>